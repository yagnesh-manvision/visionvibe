import { useEffect, useState } from 'react'
import { getEvent, type EventDetails } from '../config/events'
import { contact, primarySocial, social } from '../config/site'
import { downloadIcs, eventLongDate, eventTime } from '../lib/eventDates'
import { Photo } from '../components/ui/Photo'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'
import { ArrowIcon, MailIcon, PinIcon, SocialIcon } from '../components/ui/Icons'

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
  </svg>
)

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

function Countdown({ target }: { target: string }) {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    const tick = () => setNow(Date.now())
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [])
  if (now === null) return null

  const diff = new Date(target).getTime() - now
  if (diff <= 0) return null
  const parts = [
    { v: Math.floor(diff / 86_400_000), l: 'Days' },
    { v: Math.floor(diff / 3_600_000) % 24, l: 'Hours' },
    { v: Math.floor(diff / 60_000) % 60, l: 'Mins' },
    { v: Math.floor(diff / 1000) % 60, l: 'Secs' },
  ]
  return (
    <div className="countdown" role="timer" aria-label="Time until the show">
      {parts.map((p) => (
        <div key={p.l} className="countdown__unit">
          <span className="countdown__value">{String(p.v).padStart(2, '0')}</span>
          <span className="countdown__label">{p.l}</span>
        </div>
      ))}
    </div>
  )
}

function ShareButton({ e }: { e: EventDetails }) {
  const [copied, setCopied] = useState(false)
  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: e.title, text: e.subtitle, url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      /* user cancelled the share sheet */
    }
  }
  return (
    <button type="button" className="ev-aside__link" onClick={share}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4" />
      </svg>
      {copied ? 'Link copied!' : 'Share this event'}
    </button>
  )
}

function NotFound() {
  return (
    <section className="ev-notfound container">
      <p className="eyebrow">Events</p>
      <h1 className="display-2">We couldn’t find that event.</h1>
      <p className="lede">It may have been renamed or removed.</p>
      <div style={{ marginTop: 36 }}>
        <Button href="#events" arrow>
          See all events
        </Button>
      </div>
    </section>
  )
}

export function EventPage({ slug }: { slug: string }) {
  const e = getEvent(slug)

  useEffect(() => {
    document.title = e ? `${e.title} — VisionVibe Productions` : 'Event not found — VisionVibe Productions'
  }, [e])

  if (!e) return <NotFound />

  const ticketsUrl = e.ticketsUrl ?? primarySocial.url
  const enquiry = `mailto:${contact.email}?subject=${encodeURIComponent(`Enquiry — ${e.title}`)}`
  const facts = [
    { k: 'Date', v: eventLongDate(e), icon: <CalendarIcon /> },
    { k: 'Time', v: `Doors ${e.doorsOpen} · Show ${eventTime(e.start, e)} – ${eventTime(e.end, e)}`, icon: <ClockIcon /> },
    { k: 'Venue', v: `${e.venue}, ${e.city}`, icon: <PinIcon width={18} height={18} /> },
  ]

  return (
    <article className="ev">
      {/* ---------- Event hero ---------- */}
      <header className="ev-hero">
        <div className="ev-hero__media" aria-hidden="true">
          <Photo photo={e.image} sizes="100vw" priority alt="" />
          <div className="ev-hero__overlay" />
          <div className="grain" />
        </div>

        <div className="container ev-hero__content">
          <nav className="ev-crumbs" aria-label="Breadcrumb">
            <a href="#home">Home</a>
            <span aria-hidden="true">/</span>
            <a href="#events">Events</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{e.title}</span>
          </nav>

          <p className="hero__eyebrow ev-hero__eyebrow">
            <span className="hero__rule" />
            {e.category} <i>•</i> {e.language.split(' ')[0]}
          </p>
          <h1 className="ev-hero__title">{e.title}</h1>
          <p className="ev-hero__subtitle">{e.subtitle}</p>

          <div className="ev-hero__row">
            <ul className="ev-hero__facts">
              {facts.map((f) => (
                <li key={f.k}>
                  {f.icon}
                  <span>{f.v}</span>
                </li>
              ))}
            </ul>
            <Countdown target={e.start} />
          </div>

          <div className="hero__ctas ev-hero__ctas">
            <Button href={ticketsUrl} arrow>
              Get Ticket Updates
            </Button>
            <button type="button" className="btn btn--ghost" onClick={() => downloadIcs(e, window.location.href)}>
              <CalendarIcon />
              <span>Add to Calendar</span>
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Body ---------- */}
      <div className="container ev-body">
        <div className="ev-main">
          <section className="ev-block">
            <Reveal as="p" className="eyebrow">
              About the evening
            </Reveal>
            <Reveal as="p" className="ev-summary" delay={60}>
              {e.summary}
            </Reveal>
            {e.description.map((p, i) => (
              <Reveal as="p" key={i} className="ev-para" delay={100 + i * 60}>
                {p}
              </Reveal>
            ))}
          </section>

          <section className="ev-block">
            <Reveal as="p" className="eyebrow">
              What to expect
            </Reveal>
            <div className="ev-highlights">
              {e.highlights.map((h, i) => (
                <Reveal key={h.title} className="ev-highlight" delay={i * 80}>
                  <span className="ev-highlight__num">0{i + 1}</span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="ev-block ev-artist">
            <Reveal as="p" className="eyebrow">
              The artist
            </Reveal>
            <Reveal as="h2" className="display-2 ev-artist__name" delay={60}>
              {e.artist.name}
            </Reveal>
            <Reveal as="p" className="ev-artist__role" delay={100}>
              {e.artist.role}
            </Reveal>
            {e.artist.bio.map((p, i) => (
              <Reveal as="p" key={i} className="ev-para" delay={140 + i * 60}>
                {p}
              </Reveal>
            ))}
          </section>

          <section className="ev-block">
            <Reveal as="p" className="eyebrow">
              The evening
            </Reveal>
            <ol className="ev-schedule">
              {e.schedule.map((s, i) => (
                <Reveal as="li" key={s.time} delay={i * 70}>
                  <span className="ev-schedule__time">{s.time}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="ev-block">
            <Reveal as="p" className="eyebrow">
              Good to know
            </Reveal>
            <div className="ev-faqs">
              {e.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="ev-faq">
                    <summary>
                      {f.q}
                      <span className="ev-faq__icon" aria-hidden="true" />
                    </summary>
                    <p>{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        {/* ---------- Sticky info card ---------- */}
        <aside className="ev-aside">
          <div className="ev-aside__card">
            <p className="ev-aside__note">{e.ticketsNote}</p>
            <dl className="ev-aside__facts">
              {facts.map((f) => (
                <div key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
              <div>
                <dt>Language</dt>
                <dd>{e.language}</dd>
              </div>
              <div>
                <dt>Age</dt>
                <dd>{e.ageGuide}</dd>
              </div>
              <div>
                <dt>Dress code</dt>
                <dd>{e.dressCode}</dd>
              </div>
            </dl>

            <Button href={ticketsUrl} arrow className="ev-aside__cta">
              Get Ticket Updates
            </Button>

            <div className="ev-aside__links">
              <button type="button" className="ev-aside__link" onClick={() => downloadIcs(e, window.location.href)}>
                <CalendarIcon /> Add to calendar
              </button>
              <ShareButton e={e} />
              <a className="ev-aside__link" href={enquiry}>
                <MailIcon width={18} height={18} /> Enquire about this event
              </a>
            </div>

            <div className="ev-aside__social">
              {social.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <SocialIcon name={s.key} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="container ev-back">
        <a href="#events" className="ev-back__link">
          <ArrowIcon width={18} height={18} style={{ transform: 'rotate(180deg)' }} />
          Back to all events
        </a>
      </div>
    </article>
  )
}
