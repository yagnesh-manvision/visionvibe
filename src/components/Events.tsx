import { eventPath, events, type EventDetails } from '../config/events'
import { eventDay, eventMonthYear, eventTime } from '../lib/eventDates'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { Photo } from './ui/Photo'
import { Button } from './ui/Button'
import { PinIcon } from './ui/Icons'

function FeaturedEvent({ e }: { e: EventDetails }) {
  const href = eventPath(e.slug)
  return (
    <Reveal className="featured-event">
      <a href={href} className="featured-event__media" tabIndex={-1} aria-hidden="true">
        <Photo photo={e.image} sizes="(max-width: 960px) 95vw, 55vw" />
        {e.badge && <span className="featured-event__badge">{e.badge}</span>}
      </a>

      <div className="featured-event__body">
        <div className="featured-event__date">
          <span className="featured-event__day">{eventDay(e)}</span>
          <span className="featured-event__month">{eventMonthYear(e)}</span>
        </div>

        <span className="featured-event__cat">{e.category}</span>
        <h3 className="featured-event__title">
          <a href={href}>{e.title}</a>
        </h3>
        <p className="featured-event__subtitle">{e.subtitle}</p>

        <ul className="featured-event__meta">
          <li>
            <PinIcon width={16} height={16} /> {e.venue}, {e.city}
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            Show starts {eventTime(e.start, e)} · Doors {e.doorsOpen}
          </li>
        </ul>

        <Button href={href} arrow className="featured-event__cta">
          View Details
        </Button>
      </div>
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
          intro="Our debut production is almost here. Explore the full details below — and follow our socials for ticket announcements."
        />

        <div className="events__list">
          {events.map((e) => (
            <FeaturedEvent key={e.slug} e={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
