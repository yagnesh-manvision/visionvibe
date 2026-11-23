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
