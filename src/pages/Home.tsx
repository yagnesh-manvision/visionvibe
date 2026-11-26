import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Intro } from '../components/Intro'
import { UpcomingShow } from '../components/UpcomingShow'
import { Social } from '../components/Social'
import { Subscribe } from '../components/Subscribe'
import { SectionHeading } from '../components/ui/SectionHeading'
import { upcomingShow } from '../config/site'

// The brief's stats bar is left out until Ravi supplies real figures.
export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <section className="section events" aria-labelledby="next-show-title">
        <div className="container">
          <SectionHeading
            eyebrow="Upcoming show"
            title={
              <span id="next-show-title">
                What’s <em className="gold-text">next</em> on stage.
              </span>
            }
          />
          <div className="events__list">
            <UpcomingShow
              title="Our Next Big Show Is Coming"
              text={`A celebrated artist, live in Sydney and Melbourne · ${upcomingShow.timing} · Artist, dates and venues announced soon.`}
            />
          </div>
        </div>
      </section>
      <Social />
      <Subscribe />
    </>
  )
}
