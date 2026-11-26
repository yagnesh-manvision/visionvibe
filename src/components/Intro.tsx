import { Reveal } from './ui/Reveal'
import { MicIcon, PeopleIcon, SparkIcon } from './ui/Icons'

const reasons = [
  {
    icon: MicIcon,
    title: 'Iconic artists',
    text: 'We bring the right voices: famous, talented singers audiences have loved for decades.',
  },
  {
    icon: SparkIcon,
    title: 'Unforgettable nights',
    text: 'Great sound, great lighting and a show that runs smoothly from doors open to the final song.',
  },
  {
    icon: PeopleIcon,
    title: 'Community first',
    text: 'Our shows are a place to meet, reconnect and celebrate together.',
  },
]

export function Intro() {
  return (
    <section id="intro" className="section intro" aria-labelledby="why-title">
      <div className="container">
        <Reveal as="p" className="intro__strip">
          VisionVibe Productions is an Australian event and production company. We bring celebrated artists from
          India and around the world to Australia and create live shows that families and friends remember for
          years.
        </Reveal>

        <Reveal as="p" className="eyebrow eyebrow--center intro__eyebrow" delay={80}>
          <span id="why-title">Why VisionVibe</span>
        </Reveal>

        <div className="intro__grid">
          {reasons.map((r, i) => (
            <Reveal key={r.title} className="feature" delay={140 + i * 90}>
              <span className="feature__icon">
                <r.icon width={26} height={26} />
              </span>
              <h3 className="feature__title">{r.title}</h3>
              <p className="feature__text">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
