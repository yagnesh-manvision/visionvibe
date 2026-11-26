import { useEffect, useLayoutEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { AboutPage } from './pages/AboutPage'
import { EventsPage } from './pages/EventsPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { pageTitles, type PageId } from './config/site'
import { useRoute } from './lib/router'

const pages: Record<PageId, () => React.JSX.Element> = {
  home: Home,
  about: AboutPage,
  events: EventsPage,
  services: ServicesPage,
  contact: ContactPage,
}

export default function App() {
  const route = useRoute()
  const prevPage = useRef(route.page)

  // Scroll handling when moving between pages / to a home section
  useLayoutEffect(() => {
    const changedPage = prevPage.current !== route.page
    prevPage.current = route.page
    const el = route.section ? document.getElementById(route.section) : null
    if (el) el.scrollIntoView({ behavior: changedPage ? 'instant' : 'smooth' })
    else if (changedPage || !route.section) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  useEffect(() => {
    document.title = pageTitles[route.page]
  }, [route.page])

  const Page = pages[route.page]

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
      <Navbar current={route.page} />
      <main id="main" tabIndex={-1} key={route.page}>
        <Page />
      </main>
      <Footer />
    </>
  )
}
