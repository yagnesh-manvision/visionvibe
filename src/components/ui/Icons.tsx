import type { SVGProps } from 'react'
import type { SocialKey } from '../../config/site'

type P = SVGProps<SVGSVGElement>

const base = (p: P): P => ({ width: 20, height: 20, viewBox: '0 0 24 24', 'aria-hidden': true, ...p })

export const InstagramIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

export const FacebookIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor">
    <path d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z" />
  </svg>
)

export const YoutubeIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor">
    <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
  </svg>
)

export const TiktokIcon = (p: P) => (
  <svg {...base(p)} fill="currentColor">
    <path d="M16.6 3h-3.1v12.2a2.7 2.7 0 1 1-2.7-2.7c.3 0 .6 0 .8.1V9.4a5.9 5.9 0 1 0 5 5.8V9.1a7.6 7.6 0 0 0 4.4 1.4V7.4a4.4 4.4 0 0 1-4.4-4.4Z" />
  </svg>
)

export const ArrowIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const ArrowUpRightIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const MailIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
  </svg>
)

export const PinIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const PhoneIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h3.5l1.6 4-2.2 1.4a11 11 0 0 0 5.7 5.7l1.4-2.2 4 1.6V18a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
)

export const MicIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
  </svg>
)

export const SparkIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

export const PeopleIcon = (p: P) => (
  <svg {...base(p)} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M16 14.2a5 5 0 0 1 5.5 5.8" />
  </svg>
)

export const SocialIcon = ({ name, ...p }: P & { name: SocialKey }) => {
  const Icon = { instagram: InstagramIcon, facebook: FacebookIcon, youtube: YoutubeIcon, tiktok: TiktokIcon }[name]
  return <Icon {...p} />
}
