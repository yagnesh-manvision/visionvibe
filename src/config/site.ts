/**
 * Central site configuration.
 * Update social URLs, contact details, pages and the upcoming show here — every component reads from this file.
 */

export type SocialKey = 'instagram' | 'facebook' | 'youtube' | 'tiktok'

export interface SocialLink {
  key: SocialKey
  label: string
  url: string
  blurb: string
}

/**
 * Only accounts that actually exist are listed. YouTube and TikTok icons are ready —
 * add an entry here when the team sends those links.
 */
export const social: SocialLink[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/visionvibe__productions/',
    blurb: 'Show announcements, reels and behind-the-scenes moments.',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61596554835271',
    blurb: 'Event pages, community updates and photo albums.',
  },
]

/** Primary platform used by "Follow us" CTAs */
export const primarySocial = social[0]

export const contact = {
  email: 'events@visionvibe.com.au',
  phone: '+61 485 865 416',
  phoneHref: 'tel:+61485865416',
  address: 'Suite A15, 24–32 Lexington Drive, Bella Vista NSW 2153, Australia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('24-32 Lexington Drive, Bella Vista NSW 2153, Australia') +
    '&output=embed',
}

/**
 * Upcoming show — artist, venues and tickets not announced yet.
 * When they are, fill in the details here (and consider adding a full event page).
 */
export const upcomingShow = {
  title: 'Big Announcement Coming Soon',
  status: 'Coming soon – stay tuned',
  cities: 'Sydney & Melbourne',
  timing: 'May 2027',
  text: 'An evening of the songs you love, performed live by one of the most loved voices in South Indian music, with separate Tamil and Telugu shows. Artist, venues and tickets announced soon.',
}

export type PageId = 'home' | 'about' | 'events' | 'services' | 'contact'

/**
 * Pages shown in the navigation.
 * "Our Shows" and "Gallery" from the content brief are left out until Ravi supplies
 * past-show details, photos and testimonials — add them back here when they exist.
 */
export const navLinks: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'events', label: 'Upcoming Events' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export const pageTitles: Record<PageId, string> = {
  home: 'VisionVibe Productions — Where Every Moment Becomes a Memory',
  about: 'About Us — VisionVibe Productions',
  events: 'Upcoming Events — VisionVibe Productions',
  services: 'Services — VisionVibe Productions',
  contact: 'Contact — VisionVibe Productions',
}

export const pagePath = (id: PageId) => (id === 'home' ? '#/' : `#/${id}`)

/**
 * Form delivery. While `endpoint` is null, forms open the visitor's email app with the
 * message pre-filled to `contact.email`. Set an endpoint (e.g. Formspree / Web3Forms)
 * once the form service is chosen, so messages are sent straight from the site.
 */
export const forms = {
  endpoint: null as string | null,
}
