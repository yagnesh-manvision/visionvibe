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

export const SocialIcon = ({ name, ...p }: P & { name: SocialKey }) => {
  const Icon = { instagram: InstagramIcon, facebook: FacebookIcon, youtube: YoutubeIcon }[name]
  return <Icon {...p} />
}
