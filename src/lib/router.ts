import { useEffect, useState } from 'react'
import { navLinks, type PageId } from '../config/site'

/**
 * Minimal hash router — no dependency, and works on any static host without server rewrites.
 *
 *   #/            → home
 *   #/about       → a page (see navLinks)
 *   #subscribe    → home, scrolled to that section
 */
export interface Route {
  page: PageId
  section: string | null
}

const pageIds = new Set<string>(navLinks.map((l) => l.id))

export function parseHash(hash: string): Route {
  const m = hash.match(/^#\/([\w-]*)\/?$/)
  if (m) {
    const id = m[1] || 'home'
    return { page: pageIds.has(id) ? (id as PageId) : 'home', section: null }
  }
  const section = hash.replace(/^#/, '')
  // Old single-page links like #about or #contact now go to the matching page
  if (pageIds.has(section)) return { page: section as PageId, section: null }
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
