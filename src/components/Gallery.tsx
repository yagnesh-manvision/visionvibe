import { photos, type Photo as PhotoT } from '../config/images'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const items: { photo: PhotoT; caption: string; tag: string; size: string }[] = [
  { photo: photos.bigStage, caption: 'The main stage', tag: 'Concert', size: 'xl' },
  { photo: photos.confettiBlast, caption: 'Confetti o’clock', tag: 'Festival', size: 'tall' },
  { photo: photos.drinks, caption: 'Cheers to tonight', tag: 'Soirée', size: 'sq' },
  { photo: photos.phoneCrowd, caption: 'Front row energy', tag: 'Live Music', size: 'sq' },
  { photo: photos.handsUp, caption: 'Hands in the air', tag: 'DJ Night', size: 'wide' },
  { photo: photos.beams, caption: 'Into the light', tag: 'Production', size: 'tall' },
  { photo: photos.heroConfetti, caption: 'The drop', tag: 'Party', size: 'wide' },
]

const sizesFor: Record<string, string> = {
  xl: '(max-width: 760px) 95vw, 58vw',
  wide: '(max-width: 760px) 95vw, 50vw',
  tall: '(max-width: 760px) 95vw, 30vw',
  sq: '(max-width: 760px) 95vw, 30vw',
}

export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <SectionHeading
          eyebrow="Event Highlights"
          align="center"
          title={
            <>
              Moments we <em className="gold-text">made</em> together.
            </>
          }
          intro="A glimpse into the nights, the crowds and the atmosphere behind VisionVibe."
        />

        <div className="gallery__grid">
          {items.map((it, i) => (
            <Reveal key={it.photo.id} className={`gallery__item gallery__item--${it.size}`} delay={(i % 3) * 90}>
              <figure>
                <Photo photo={it.photo} sizes={sizesFor[it.size]} />
                <figcaption>
                  <span className="gallery__tag">{it.tag}</span>
                  <span className="gallery__caption">{it.caption}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
