import { useEffect, useLayoutEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { EventPage } from './pages/EventPage'
import { useRoute } from './lib/router'

const HOME_TITLE = 'VisionVibe Productions — Where Every Moment Becomes a Memory'

export default function App() {
  const route = useRoute()
  const pageKey = route.page === 'event' ? `event:${route.slug}` : 'home'
  const prevPage = useRef(pageKey)

  // Scroll handling when moving between pages
  useLayoutEffect(() => {
    const changedPage = prevPage.current !== pageKey
    prevPage.current = pageKey

    if (route.page === 'event') {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    // Arriving on home from another page: the browser couldn't scroll to the
    // #section yet because it didn't exist, so do it now that it's rendered.
    if (changedPage) {
      const el = route.section ? document.getElementById(route.section) : null
      if (el) el.scrollIntoView({ behavior: 'instant' })
      else window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [route, pageKey])

  useEffect(() => {
    if (route.page === 'home') document.title = HOME_TITLE
  }, [route.page])

  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(ev) => {
          // focus the content directly instead of changing the hash (which drives routing)
          ev.preventDefault()
          document.getElementById('main')?.focus()
        }}
      >
        Skip to content
      </a>
      {/* keyed so scroll-spy re-binds to the sections of the current page */}
      <Navbar key={pageKey} current={route.page === 'event' ? 'events' : undefined} />
      <main id="main" tabIndex={-1}>{route.page === 'event' ? <EventPage slug={route.slug} /> : <Home />}</main>
      <Footer />
    </>
  )
}
