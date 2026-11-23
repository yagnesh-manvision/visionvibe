import { useEffect, useState } from 'react'
import { photos } from '../config/images'
import { social } from '../config/site'
import { Photo } from './ui/Photo'
import { Button } from './ui/Button'
import { SocialIcon } from './ui/Icons'
import logoMarkUrl from '../assets/brand/logo-mark.svg'

const slides = [
  { photo: photos.heroStage, caption: 'Live Music & Concerts' },
  { photo: photos.heroCrowd, caption: 'DJ Nights & Parties' },
  { photo: photos.heroConfetti, caption: 'Celebrations & Special Events' },
]

const SLIDE_MS = 7000

export function Hero() {
  const [index, setIndex] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Trigger the entrance choreography after first paint
    const t = requestAnimationFrame(() => setLoaded(true))
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => cancelAnimationFrame(t)
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => {
      cancelAnimationFrame(t)
      window.clearInterval(id)
    }
  }, [])

  return (
    <section id="home" className={`hero ${loaded ? 'is-loaded' : ''}`} aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        {slides.map((s, i) => (
          <div key={s.photo.id} className={`hero__slide ${i === index ? 'is-active' : ''}`}>
            <Photo photo={s.photo} sizes="100vw" priority={i === 0} alt="" />
          </div>
        ))}
        <div className="hero__beam hero__beam--1" />
        <div className="hero__beam hero__beam--2" />
        <div className="hero__overlay" />
        <div className="grain" />
      </div>

      <img src={logoMarkUrl} alt="" aria-hidden="true" className="hero__watermark" />

      <div className="hero__content container">
        <p className="hero__eyebrow">
          <span className="hero__rule" />
          Entertainment <i>•</i> Experiences <i>•</i> Productions
        </p>

        <h1 className="hero__title">
          <span className="line">
            <span className="word">Where</span> <span className="word">every</span>{' '}
            <span className="word">moment</span>
          </span>
          <span className="line">
            <span className="word">becomes</span> <span className="word">a</span>{' '}
            <span className="word gold-text">memory.</span>
          </span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__text">
            We create unforgettable entertainment experiences, bringing people together through music,
            celebrations and extraordinary events.
          </p>
          <div className="hero__ctas">
            <Button href="#events" arrow>
              Explore Our Events
            </Button>
            <Button href="#follow" variant="ghost">
              Follow Our Journey
            </Button>
          </div>
        </div>
      </div>

      <div className="hero__footer container">
        <div className="hero__socials">
          {social.map((s) => (
            <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <SocialIcon name={s.key} width={17} height={17} />
            </a>
          ))}
        </div>

        <a href="#about" className="hero__scroll" aria-label="Scroll to About">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </a>

        <div className="hero__progress" aria-hidden="true">
          <span className="hero__caption" key={index}>
            {slides[index].caption}
          </span>
          <div className="hero__dots">
            {slides.map((s, i) => (
              <button
                key={s.photo.id}
                className={i === index ? 'is-active' : ''}
                onClick={() => setIndex(i)}
                tabIndex={-1}
              >
                <span style={{ animationDuration: `${SLIDE_MS}ms` }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
