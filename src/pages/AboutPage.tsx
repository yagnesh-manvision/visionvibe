import { photos } from '../config/images'
import { PageHero } from '../components/PageHero'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const values = [
  { title: 'Joy', text: 'People come to enjoy, laugh and relax. Everything we do serves that.' },
  { title: 'Quality', text: 'The right artists, the right venues, the right production.' },
  { title: 'Community', text: 'Our shows bring people together and build connections.' },
  { title: 'Trust', text: 'We deliver what we promise to artists, partners and audiences.' },
]

// TODO: add portraits from the founders' photoshoot (and Ravi's show count, artists and cities) when supplied.
const founders = [
  {
    name: 'Ravi Nama',
    initials: 'RN',
    role: 'Co-Founder & Director of Events',
    bio: 'Ravi has been producing live shows in Australia for many years through Mastis Entertainments. Ravi leads artist relations and event production, making sure every show runs smoothly from the first enquiry to the final curtain.',
  },
  {
    name: 'Ram Pulipati',
    initials: 'RP',
    role: 'Co-Founder & Director',
    bio: 'Ram has built and run businesses in Australia for more than 25 years. His strong network across the business and community sectors brings partnerships, sponsors and community reach to every VisionVibe show. Ram leads business strategy, partnerships and growth.',
  },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Bringing music, memories <span className="gold-text">and community together.</span>
          </>
        }
        photo={photos.heroCrowd}
      />

      <section className="section about">
        <div className="container about__grid">
          <div className="about__media">
            <Reveal className="about__img about__img--main">
              <Photo photo={photos.heartHands} sizes="(max-width: 900px) 90vw, 40vw" />
            </Reveal>
            <Reveal className="about__img about__img--accent" delay={150}>
              <Photo photo={photos.microphone} sizes="(max-width: 900px) 50vw, 22vw" maxWidth={1200} />
            </Reveal>
          </div>

          <div className="about__copy">
            <Reveal as="p" className="eyebrow">
              Our story
            </Reveal>
            <Reveal as="h2" className="display-2" delay={80}>
              Music has the power <em className="gold-text">to take us back.</em>
            </Reveal>
            <Reveal as="p" className="lede" delay={160}>
              VisionVibe Productions began with a simple idea: music has the power to take us back. One song can
              bring back a childhood home, a college friendship or a first film watched with family. We wanted to
              create nights where people could come together, relax, laugh, sing along and relive those memories.
            </Reveal>
            <Reveal as="p" className="body-copy" delay={220}>
              Australia is home to a large and growing Indian community, especially Telugu and Tamil families, who
              love the artists they grew up with. VisionVibe exists to bring those artists here and give our
              community world-class live experiences close to home.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container mv">
          <Reveal className="mv__card">
            <p className="eyebrow">Our mission</p>
            <p className="mv__text">
              To bring the right artists, the most talented and most loved singers, to Australia, and to deliver
              shows where every guest enjoys the music, the atmosphere and the company.
            </p>
          </Reveal>
          <Reveal className="mv__card" delay={120}>
            <p className="eyebrow">Our vision</p>
            <p className="mv__text">
              To become Australia’s most trusted name for international music and cultural events, known for great
              artists, smooth production and a warm, family-friendly experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our values"
            align="center"
            title={
              <>
                What we <em className="gold-text">stand for.</em>
              </>
            }
          />
          <div className="card-grid card-grid--4">
            {values.map((v, i) => (
              <Reveal key={v.title} className="tile" delay={i * 90}>
                <span className="tile__num">0{i + 1}</span>
                <h3 className="tile__title">{v.title}</h3>
                <p className="tile__text">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Meet the founders"
            title={
              <>
                Two partners, <em className="gold-text">one shared belief.</em>
              </>
            }
          />
          <div className="founders">
            {founders.map((f, i) => (
              <Reveal key={f.name} className="founder" delay={i * 120}>
                <div className="founder__portrait" aria-hidden="true">
                  {f.initials}
                </div>
                <div>
                  <h3 className="founder__name">{f.name}</h3>
                  <p className="founder__role">{f.role}</p>
                  <p className="founder__bio">{f.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="closing-line" delay={120}>
            Two partners, one shared belief: when people come together for great music, they leave with memories
            that last a lifetime.
          </Reveal>
        </div>
      </section>
    </>
  )
}
