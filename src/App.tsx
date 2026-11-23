import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Events } from './components/Events'
import { Gallery } from './components/Gallery'
import { Social } from './components/Social'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Events />
        <Gallery />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
