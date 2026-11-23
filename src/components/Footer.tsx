import { contact, navLinks, social } from '../config/site'
import { LogoFull } from './ui/Logo'
import { SocialIcon } from './ui/Icons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#home" className="footer__logo" aria-label="Back to top">
            <LogoFull width={220} />
          </a>
          <p className="footer__tagline">Where every moment becomes a memory.</p>
        </div>

        <div className="footer__row">
          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="footer__social">
            {social.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <SocialIcon name={s.key} width={18} height={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} VisionVibe Productions. All rights reserved.</span>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>
    </footer>
  )
}
