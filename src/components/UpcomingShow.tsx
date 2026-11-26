import type { MouseEvent } from 'react'
import { photos } from '../config/images'
import { upcomingShow } from '../config/site'
import { Reveal } from './ui/Reveal'
import { Photo } from './ui/Photo'
import { Button } from './ui/Button'
import { PinIcon } from './ui/Icons'

/** Scroll to the subscribe form on this page if there is one; otherwise the link goes to the home page's form. */
function toSubscribe(ev: MouseEvent<HTMLAnchorElement>) {
  const el = document.getElementById('subscribe')
  if (el) {
    ev.preventDefault()
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

interface Props {
  title?: string
  text?: string
}

export function UpcomingShow({ title = upcomingShow.title, text = upcomingShow.text }: Props) {
  const [month, year] = upcomingShow.timing.split(' ')
  return (
    <Reveal className="featured-event">
      <div className="featured-event__media" aria-hidden="true">
        <Photo photo={photos.bigStage} sizes="(max-width: 960px) 95vw, 55vw" alt="" />
        <span className="featured-event__badge">{upcomingShow.status}</span>
      </div>

      <div className="featured-event__body">
        <div className="featured-event__date">
          <span className="featured-event__day">{month}</span>
          <span className="featured-event__month">{year}</span>
        </div>

        <span className="featured-event__cat">Live Concert · Coming soon</span>
        <h3 className="featured-event__title">{title}</h3>
        <p className="featured-event__subtitle">{text}</p>

        <ul className="featured-event__meta">
          <li>
            <PinIcon width={16} height={16} /> {upcomingShow.cities}
          </li>
          <li>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3.5" y="5" width="17" height="15" rx="2" />
              <path d="M3.5 10h17M8 3v4M16 3v4" />
            </svg>
            {upcomingShow.timing} · {upcomingShow.status}
          </li>
        </ul>

        <Button href="#subscribe" onClick={toSubscribe} arrow className="featured-event__cta">
          Register Your Interest
        </Button>
      </div>
    </Reveal>
  )
}
