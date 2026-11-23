import { photos } from '../config/images'
import { social } from '../config/site'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'
import { ArrowUpRightIcon, SocialIcon } from './ui/Icons'

export function Social() {
  return (
    <section id="follow" className="social" aria-labelledby="social-title">
      <div className="social__bg" aria-hidden="true">
        <Photo photo={photos.heroCrowd} sizes="100vw" alt="" />
        <div className="social__overlay" />
        <div className="grain" />
      </div>

      <div className="container social__inner">
        <Reveal as="p" className="eyebrow eyebrow--center">
          Follow the journey
        </Reveal>
        <Reveal as="h2" className="display-1 social__title" delay={80}>
          <span id="social-title">
            Be part of <br />
            the <em className="gold-text">vibe.</em>
          </span>
        </Reveal>
        <Reveal as="p" className="lede social__lede" delay={160}>
          Event drops, line-up reveals, aftermovies and the moments you missed — it all happens on our socials
          first.
        </Reveal>

        <div className="social__cards">
          {social.map((s, i) => (
            <Reveal key={s.key} delay={220 + i * 90} className="social-card-wrap">
              <a className="social-card" href={s.url} target="_blank" rel="noopener noreferrer">
                <span className="social-card__icon">
                  <SocialIcon name={s.key} width={26} height={26} />
                </span>
                <span className="social-card__label">{s.label}</span>
                <span className="social-card__blurb">{s.blurb}</span>
                <span className="social-card__cta">
                  Follow <ArrowUpRightIcon width={16} height={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
