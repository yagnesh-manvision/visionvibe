/**
 * Central site configuration.
 * Update social URLs, contact details and events here — every component reads from this file.
 */

export type SocialKey = 'instagram' | 'facebook' | 'youtube'

export interface SocialLink {
  key: SocialKey
  label: string
  /** TODO: replace with the real VisionVibe account URLs */
  url: string
  blurb: string
}

export const social: SocialLink[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    blurb: 'Event reels, behind-the-scenes and first announcements.',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/',
    blurb: 'Event pages, community updates and photo albums.',
  },
  {
    key: 'youtube',
    label: 'YouTube',
    url: 'https://www.youtube.com/',
    blurb: 'Aftermovies, live sets and full-length highlights.',
  },
]

/** Primary platform used by "Follow us" CTAs */
export const primarySocial = social[0]

export const contact = {
  /** TODO: replace with the real enquiries inbox */
  email: 'hello@visionvibeproductions.com',
  location: 'Sydney, Australia',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'events', label: 'Events' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const

export interface EventItem {
  title: string
  date: string // ISO date
  venue: string
  category: string
  /** Where visitors go for details — usually an Instagram/Facebook post */
  url?: string
}

/** TODO: replace placeholder events with real ones */
export const upcomingEvents: EventItem[] = [
  {
    title: 'Golden Hour Sessions',
    date: '2026-12-12',
    venue: 'Rooftop Terrace, Sydney',
    category: 'Live Music',
  },
  {
    title: 'Noir — A New Year’s Eve Soirée',
    date: '2026-12-31',
    venue: 'Harbourside, Sydney',
    category: 'DJ Night',
  },
  {
    title: 'Festival of Lights Gala',
    date: '2027-02-20',
    venue: 'Grand Ballroom, Sydney',
    category: 'Cultural Celebration',
  },
]

export const pastEvents: EventItem[] = [
  { title: 'Midnight in Gold', date: '2026-10-18', venue: 'Sydney', category: 'DJ Night' },
  { title: 'Rhythms of Home', date: '2026-08-30', venue: 'Parramatta', category: 'Cultural Celebration' },
  { title: 'Acoustic Under the Stars', date: '2026-06-14', venue: 'Sydney', category: 'Live Music' },
  { title: 'The Velvet Room', date: '2026-04-05', venue: 'Sydney', category: 'Private Event' },
]
