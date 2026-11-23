import { photos, type Photo } from './images'

/**
 * All VisionVibe events. Each event gets its own page at  /#/events/<slug>
 *
 * TODO: the details below are placeholders — replace the artist, venue,
 * date and copy with the confirmed information before announcing.
 */

export interface EventScheduleItem {
  time: string
  title: string
  text: string
}

export interface EventFaq {
  q: string
  a: string
}

export interface EventDetails {
  slug: string
  title: string
  subtitle: string
  category: string
  /** Start/end with the venue's UTC offset so times and calendar files are correct anywhere */
  start: string
  end: string
  doorsOpen: string
  /** IANA zone of the venue — times are always shown in venue-local time */
  timeZone: string
  venue: string
  city: string
  language: string
  ageGuide: string
  dressCode: string
  image: Photo
  summary: string
  description: string[]
  artist: {
    name: string
    role: string
    bio: string[]
  }
  highlights: { title: string; text: string }[]
  schedule: EventScheduleItem[]
  faqs: EventFaq[]
  /** Where tickets/updates are announced. Defaults to the primary social account. */
  ticketsUrl?: string
  ticketsNote: string
  /** Optional ribbon on the event card, e.g. "Our first event" */
  badge?: string
}

export const events: EventDetails[] = [
  {
    slug: 'the-voice-of-a-thousand-memories',
    title: 'The Voice of a Thousand Memories',
    subtitle: 'A live concert celebrating the timeless melodies of Telugu music',
    category: 'Live Concert',
    start: '2027-01-16T19:00:00+11:00',
    end: '2027-01-16T22:30:00+11:00',
    doorsOpen: '6:00 PM',
    timeZone: 'Australia/Sydney',
    venue: 'The Grand Pavilion',
    city: 'Sydney, Australia',
    language: 'Telugu (with a few Hindi & Tamil classics)',
    ageGuide: 'All ages — children under 5 enter free',
    dressCode: 'Festive / traditional encouraged',
    image: photos.bigStage,
    summary:
      'An evening of soulful Telugu melodies — from golden-era film classics to devotional favourites and modern chartbusters — performed live with a full orchestra.',
    description: [
      'Some songs never leave us. They play at weddings and long drives, in our parents’ homes and on festival mornings — and every time we hear them, we are somewhere else, with someone we love. The Voice of a Thousand Memories is a night dedicated to those songs.',
      'VisionVibe Productions’ very first concert brings acclaimed Telugu playback vocalist Sai Vardhan Rao to the stage with a 12-piece live orchestra for over three hours of music spanning five decades of Telugu cinema — the romantic duets, the soaring classical-based compositions, the folk rhythms and the devotional songs that shaped generations.',
      'Expect intimate storytelling between songs, surprise guest vocalists, and a grand Sankranti-season finale that will have the whole hall singing along.',
    ],
    artist: {
      name: 'Sai Vardhan Rao',
      role: 'Playback singer & live performer',
      bio: [
        'Trained in Carnatic music from the age of six, Sai Vardhan Rao has spent more than fifteen years performing on stages across India, the Middle East, the US and Australia, with a voice known for its warmth, range and effortless control.',
        'Celebrated for bringing evergreen Telugu melodies to new audiences, his live shows blend faithful renditions of the classics with fresh orchestral arrangements — and an easy, heartfelt rapport with the crowd.',
      ],
    },
    highlights: [
      { title: '12-piece live orchestra', text: 'Strings, flute, tabla, mridangam and keys — every song performed fully live.' },
      { title: '30+ evergreen songs', text: 'Golden-era classics, melodies of the heart, devotional favourites and modern hits.' },
      { title: 'Surprise guest vocalists', text: 'Special duets with guest singers throughout the evening.' },
      { title: 'Festive food stalls', text: 'Authentic Andhra & Telangana snacks, chai and sweets from 6 PM.' },
    ],
    schedule: [
      { time: '6:00 PM', title: 'Doors open', text: 'Welcome, festive food stalls and photo moments in the foyer.' },
      { time: '7:00 PM', title: 'Act I — Golden Classics', text: 'Timeless melodies from the golden era of Telugu cinema.' },
      { time: '8:15 PM', title: 'Intermission', text: 'A 30-minute break for refreshments.' },
      { time: '8:45 PM', title: 'Act II — Melodies of the Heart', text: 'Romantic duets, devotional favourites and modern chartbusters.' },
      { time: '10:00 PM', title: 'Grand Finale', text: 'A full-house sing-along to close the night.' },
    ],
    faqs: [
      {
        q: 'How do I get tickets?',
        a: 'Ticket release dates and the booking link will be announced first on our Instagram and Facebook pages. Follow us so you don’t miss it.',
      },
      {
        q: 'Is the concert suitable for families?',
        a: 'Absolutely — this is an all-ages, family-friendly evening. Children under 5 can attend free when seated on a parent’s lap.',
      },
      {
        q: 'Is there seating?',
        a: 'Yes, the event is fully seated. Seating categories will be shared with the ticket announcement.',
      },
      {
        q: 'Will food be available?',
        a: 'Festive food stalls with authentic Andhra & Telangana snacks, chai and sweets open with the doors at 6:00 PM.',
      },
      {
        q: 'Can I take photos or videos?',
        a: 'Phone photos and short clips are welcome — tag VisionVibe Productions so we can share your moments. Professional cameras are not permitted.',
      },
    ],
    ticketsNote: 'Tickets releasing soon — announced first on our socials.',
    badge: 'Our first event',
  },
]

export const getEvent = (slug: string) => events.find((e) => e.slug === slug)

export const eventPath = (slug: string) => `#/events/${slug}`
