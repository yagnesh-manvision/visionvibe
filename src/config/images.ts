/**
 * Event photography served from the Unsplash CDN, resized and format-negotiated
 * (AVIF/WebP) on the fly. Swap any `id` for VisionVibe's own photography later —
 * or replace `photo()` with local imports.
 */

const WIDTHS = [480, 800, 1200, 1600, 2200]

export interface Photo {
  id: string
  alt: string
}

export const photoUrl = (id: string, w: number, q = 72) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`

export const photoSrcSet = (id: string, maxW = 2200) =>
  WIDTHS.filter((w) => w <= maxW)
    .map((w) => `${photoUrl(id, w)} ${w}w`)
    .join(', ')

export const photos = {
  heroStage: { id: '1470229722913-7c0e2dbbafd3', alt: 'Crowd silhouetted against a blazing golden stage' },
  heroCrowd: { id: '1524368535928-5b5e00ddc76b', alt: 'Audience with hands raised under warm amber lights' },
  heroConfetti: { id: '1533174072545-7a4b6ad7a6c3', alt: 'Confetti falling over a packed concert crowd' },
  heartHands: { id: '1429962714451-bb934ecdc4ec', alt: 'Fan making a heart with their hands at a concert' },
  toast: { id: '1519671482749-fd09be7ccebf', alt: 'Guests raising glasses in a celebratory toast' },
  microphone: { id: '1511671782779-c97d3d27a1d4', alt: 'Vintage microphone glowing on stage' },
  djStage: { id: '1504680177321-2e6a879aac86', alt: 'DJ performing on a smoky, warmly lit stage' },
  sparklers: { id: '1467810563316-b5476525c0f9', alt: 'Hands holding sparklers at dusk' },
  dinner: { id: '1527529482837-4698179dc6ce', alt: 'Guests celebrating at a long table under festoon lights' },
  confettiBlast: { id: '1492684223066-81342ee5ff30', alt: 'Confetti cannon bursting over the crowd' },
  handsUp: { id: '1540039155733-5bb30b53aa14', alt: 'Crowd with hands up beneath stage lights' },
  phoneCrowd: { id: '1501281668745-f7f57925c3b4', alt: 'Concert-goer filming the stage on their phone' },
  bigStage: { id: '1459749411175-04bf5292ceea', alt: 'Huge crowd facing a golden-lit festival stage' },
  beams: { id: '1522158637959-30385a09e0da', alt: 'Light beams sweeping over a dancing crowd' },
  singerSmoke: { id: '1493225457124-a3eb161ffa5f', alt: 'Performer with arms raised through stage smoke' },
  drinks: { id: '1485872299829-c673f5194813', alt: 'Friends clinking cocktails at a night event' },
} satisfies Record<string, Photo>
