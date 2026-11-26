import { contact, navLinks, pagePath, social } from '../config/site'
import { LogoFull } from './ui/Logo'
import { MailIcon, PhoneIcon, PinIcon, SocialIcon } from './ui/Icons'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href={pagePath('home')} className="footer__logo" aria-label="VisionVibe Productions — home">
            <LogoFull width={220} />
          </a>
          <p className="footer__tagline">Where every moment becomes a memory.</p>
          <p className="footer__subline">
            Entertainment <i>•</i> Experiences <i>•</i> Productions
          </p>
          <address className="footer__contact">
            <a href={`mailto:${contact.email}`}>
              <MailIcon width={16} height={16} /> {contact.email}
            </a>
            <a href={contact.phoneHref}>
              <PhoneIcon width={16} height={16} /> {contact.phone}
            </a>
            <span>
              <PinIcon width={16} height={16} /> {contact.address}
            </span>
          </address>
        </div>

        <div className="footer__row">
          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((l) => (
              <a key={l.id} href={pagePath(l.id)}>
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
          <span>visionvibe.com.au</span>
        </div>
      </div>
    </footer>
  )
}
