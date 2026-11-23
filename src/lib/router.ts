import { useEffect, useState } from 'react'

/**
 * Minimal hash router — no dependency, and works on any static host (GitHub Pages,
 * Netlify, S3…) without server rewrites.
 *
 *   #/events/<slug>  → event detail page
 *   #about, #events… → home page, scrolled to that section
 */
export type Route = { page: 'home'; section: string | null } | { page: 'event'; slug: string }

export function parseHash(hash: string): Route {
  const m = hash.match(/^#\/events\/([\w-]+)\/?$/)
  if (m) return { page: 'event', slug: m[1] }
  const section = hash.replace(/^#/, '')
  return { page: 'home', section: section || null }
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash))
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}
