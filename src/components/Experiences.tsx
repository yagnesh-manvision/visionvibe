import { photos } from '../config/images'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { ArrowUpRightIcon } from './ui/Icons'

const experiences = [
  {
    title: 'Live Music & Concerts',
    text: 'Headline performances and intimate sessions, produced with stage, sound and light that do the artist justice.',
    photo: photos.microphone,
  },
  {
    title: 'DJ Nights & Parties',
    text: 'Curated line-ups and immersive production — the kind of night where nobody checks the time.',
    photo: photos.djStage,
  },
  {
    title: 'Cultural Celebrations',
    text: 'Festivals and community gatherings that honour tradition while bringing everyone onto the dance floor.',
    photo: photos.sparklers,
  },
  {
    title: 'Special Events & Experiences',
    text: 'Galas, launches and private celebrations, tailored from the first idea to the final encore.',
    photo: photos.dinner,
  },
]

export function Experiences() {
  return (
    <section className="section experiences" aria-labelledby="experiences-title">
      <div className="container">
        <div className="experiences__head">
          <SectionHeading
            eyebrow="Our Experiences"
            title={
              <span id="experiences-title">
                Crafted for every kind of <em className="gold-text">celebration.</em>
              </span>
            }
          />
          <Reveal as="p" className="lede experiences__intro" delay={160}>
            Four worlds, one standard. Whatever the occasion, every VisionVibe experience is designed to be felt —
            not just attended.
          </Reveal>
        </div>

        <div className="experiences__grid">
          {experiences.map((x, i) => (
            <Reveal key={x.title} className="exp-card" delay={i * 90}>
              <a href="#gallery" className="exp-card__link">
                <Photo photo={x.photo} sizes="(max-width: 640px) 90vw, (max-width: 1100px) 45vw, 24vw" maxWidth={1200} />
                <div className="exp-card__shade" />
                <span className="exp-card__num">0{i + 1}</span>
                <div className="exp-card__body">
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                  <span className="exp-card__more">
                    See highlights <ArrowUpRightIcon width={16} height={16} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
