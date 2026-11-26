import { useEffect, useState } from 'react'
import { navLinks, pagePath, primarySocial, social, type PageId } from '../config/site'
import { LogoLockup } from './ui/Logo'
import { InstagramIcon, SocialIcon } from './ui/Icons'

function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

export function Navbar({ current }: { current: PageId }) {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href={pagePath('home')} className="nav__brand" aria-label="VisionVibe Productions — home" onClick={() => setOpen(false)}>
          <LogoLockup />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={pagePath(l.id)}
              className={current === l.id ? 'is-active' : ''}
              aria-current={current === l.id ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn--gold btn--sm nav__cta"
          href={primarySocial.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon width={16} height={16} />
          <span>Follow Us</span>
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile">
          {navLinks.map((l, i) => (
            <a
              key={l.id}
              href={pagePath(l.id)}
              aria-current={current === l.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
              tabIndex={open ? 0 : -1}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--gold mobile-menu__cta"
          href={primarySocial.url}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
        >
          <InstagramIcon width={18} height={18} />
          <span>Follow Us</span>
        </a>
        <div className="mobile-menu__social">
          {social.map((s) => (
            <a
              key={s.key}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              tabIndex={open ? 0 : -1}
            >
              <SocialIcon name={s.key} />
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
