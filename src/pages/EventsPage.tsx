import { photos } from '../config/images'
import { PageHero } from '../components/PageHero'
import { UpcomingShow } from '../components/UpcomingShow'
import { Subscribe } from '../components/Subscribe'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const futureCities = ['Sydney', 'Melbourne', 'Brisbane', 'Adelaide', 'Perth']

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Upcoming Events"
        title={
          <>
            Coming soon to a <span className="gold-text">stage near you.</span>
          </>
        }
        photo={photos.bigStage}
      />

      <section className="section events">
        <div className="container">
          <div className="events__list events__list--flush">
            <UpcomingShow />
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container future">
          <SectionHeading
            eyebrow="Future plans"
            title={
              <>
                This is just <em className="gold-text">the beginning.</em>
              </>
            }
            intro="We plan to bring more celebrated artists to Australia each year, and to take our shows beyond Sydney and Melbourne to Brisbane, Adelaide, Perth and more."
          />
          <Reveal as="ul" className="future__cities" delay={200}>
            {futureCities.map((c) => (
              <li key={c}>{c}</li>
            ))}
            <li className="future__more">and more</li>
          </Reveal>
        </div>
      </section>

      <Subscribe />
    </>
  )
}
