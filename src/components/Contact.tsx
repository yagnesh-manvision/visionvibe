import { contact, social } from '../config/site'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { MailIcon, PinIcon, SocialIcon } from './ui/Icons'

const enquiries = ['Event collaborations', 'Artist & DJ bookings', 'Private & corporate events', 'Sponsorships & partnerships']

export function Contact() {
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Enquiry — VisionVibe Productions')}`
  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div>
          <Reveal as="p" className="eyebrow">
            Contact
          </Reveal>
          <Reveal as="h2" className="display-2" delay={80}>
            Let’s create something <em className="gold-text">unforgettable.</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={160}>
            Planning an event, looking to collaborate, or want VisionVibe to bring the energy? Tell us what you
            have in mind and we’ll be in touch.
          </Reveal>
          <Reveal delay={220} className="contact__actions">
            <Button href={mailto} arrow icon={<MailIcon width={18} height={18} />}>
              Send an Enquiry
            </Button>
          </Reveal>
        </div>

        <Reveal className="contact__panel" delay={150}>
          <h3 className="contact__panel-title">We’d love to hear about</h3>
          <ul className="contact__list">
            {enquiries.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
          <div className="contact__details">
            <a href={mailto}>
              <MailIcon width={18} height={18} /> {contact.email}
            </a>
            <span>
              <PinIcon width={18} height={18} /> {contact.location}
            </span>
          </div>
          <div className="contact__social">
            {social.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                <SocialIcon name={s.key} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
