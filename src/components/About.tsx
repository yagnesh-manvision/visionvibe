import { photos } from '../config/images'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'

const stats = [
  { value: 'Music', label: 'Concerts & live sets' },
  { value: 'Culture', label: 'Festivals & celebrations' },
  { value: 'Nights', label: 'DJ parties & soirées' },
]

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <Reveal className="about__img about__img--main">
            <Photo photo={photos.heartHands} sizes="(max-width: 900px) 90vw, 40vw" />
          </Reveal>
          <Reveal className="about__img about__img--accent" delay={150}>
            <Photo photo={photos.toast} sizes="(max-width: 900px) 50vw, 22vw" maxWidth={1200} />
          </Reveal>
          <div className="about__badge" aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#badge-circle">VISIONVIBE • PRODUCTIONS • MOMENTS • MEMORIES •</textPath>
              </text>
            </svg>
            <span>✦</span>
          </div>
        </div>

        <div className="about__copy">
          <Reveal as="p" className="eyebrow">
            About VisionVibe
          </Reveal>
          <Reveal as="h2" className="display-2" delay={80}>
            We don’t just host events. <em className="gold-text">We stage feelings.</em>
          </Reveal>
          <Reveal as="p" className="lede" delay={160}>
            VisionVibe Productions is an entertainment and event production house built around one idea — that
            the best nights are the ones people talk about for years.
          </Reveal>
          <Reveal as="p" className="body-copy" delay={220}>
            From intimate live music sessions to high-energy DJ nights and vibrant cultural celebrations, we shape
            every detail: the sound, the lighting, the atmosphere and the people in the room. The result is an
            experience that feels effortless on the night — and unforgettable long after.
          </Reveal>

          <Reveal className="about__stats" delay={280}>
            {stats.map((s) => (
              <div key={s.value} className="about__stat">
                <span className="about__stat-value">{s.value}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={340}>
            <Button href="#contact" variant="ghost" arrow>
              Work With Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
