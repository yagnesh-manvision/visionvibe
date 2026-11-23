import { pastEvents, primarySocial, upcomingEvents, type EventItem } from '../config/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { ArrowUpRightIcon, PinIcon } from './ui/Icons'
import { Button } from './ui/Button'

const fmt = (iso: string, opts: Intl.DateTimeFormatOptions) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-AU', opts)

function UpcomingCard({ e, i }: { e: EventItem; i: number }) {
  return (
    <Reveal className="event-card" delay={i * 100}>
      <a href={e.url ?? primarySocial.url} target="_blank" rel="noopener noreferrer" className="event-card__link">
        <div className="event-card__date">
          <span className="event-card__day">{fmt(e.date, { day: '2-digit' })}</span>
          <span className="event-card__month">{fmt(e.date, { month: 'short', year: 'numeric' })}</span>
        </div>
        <div className="event-card__info">
          <span className="event-card__cat">{e.category}</span>
          <h3>{e.title}</h3>
          <span className="event-card__venue">
            <PinIcon width={15} height={15} /> {e.venue}
          </span>
        </div>
        <span className="event-card__cta">
          Details <ArrowUpRightIcon width={16} height={16} />
        </span>
      </a>
    </Reveal>
  )
}

export function Events() {
  return (
    <section id="events" className="section events">
      <div className="container">
        <SectionHeading
          eyebrow="Events"
          title={
            <>
              What’s <em className="gold-text">next</em> on stage.
            </>
          }
          intro={`Announcements land first on our socials — follow along so you never miss a night.`}
        />

        <div className="events__upcoming">
          {upcomingEvents.map((e, i) => (
            <UpcomingCard key={e.title} e={e} i={i} />
          ))}
        </div>

        <div className="events__past">
          <Reveal as="h3" className="events__past-title">
            Past Events
          </Reveal>
          <ul>
            {pastEvents.map((e, i) => (
              <Reveal as="li" key={e.title} delay={i * 70}>
                <span className="events__past-date">{fmt(e.date, { month: 'short', year: 'numeric' })}</span>
                <span className="events__past-name">{e.title}</span>
                <span className="events__past-cat">{e.category}</span>
                <span className="events__past-venue">{e.venue}</span>
              </Reveal>
            ))}
          </ul>
          <Reveal className="events__more">
            <Button href="#gallery" variant="ghost" arrow>
              Relive the highlights
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
