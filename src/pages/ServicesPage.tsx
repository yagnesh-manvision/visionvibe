import { photos } from '../config/images'
import { pagePath } from '../config/site'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

const services = [
  {
    title: 'International artist tours',
    text: 'We plan and manage full Australian tours for overseas artists: contracts, visas, travel, accommodation and local support.',
  },
  {
    title: 'Concert production',
    text: 'Stage, sound, lighting, screens and crew, delivered to the artist’s technical requirements.',
  },
  {
    title: 'Event management',
    text: 'Venue booking, ticketing, security, hospitality and on-the-day running.',
  },
  {
    title: 'Marketing and promotion',
    text: 'Social media, community outreach and media partnerships to fill every seat.',
  },
  {
    title: 'Cultural and community events',
    text: 'Festival celebrations, community nights and special events.',
  },
  {
    title: 'Sponsorship and partnerships',
    text: 'Opportunities for brands to reach engaged audiences at our shows.',
  },
]

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            What <span className="gold-text">we do.</span>
          </>
        }
        intro="Everything it takes to bring a celebrated artist to an Australian stage, from the first contract to the final song."
        photo={photos.singerSmoke}
      />

      <section className="section">
        <div className="container">
          <div className="card-grid card-grid--3">
            {services.map((s, i) => (
              <Reveal key={s.title} className="tile" delay={(i % 3) * 90}>
                <span className="tile__num">0{i + 1}</span>
                <h3 className="tile__title">{s.title}</h3>
                <p className="tile__text">{s.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="cta-band" delay={120}>
            <p className="cta-band__text">
              Are you an artist, manager, venue or sponsor? <span className="gold-text">Let’s work together.</span>
            </p>
            <Button href={pagePath('contact')} arrow>
              Contact Us
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
