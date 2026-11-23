import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { About } from '../components/About'
import { Experiences } from '../components/Experiences'
import { Events } from '../components/Events'
import { Gallery } from '../components/Gallery'
import { Social } from '../components/Social'
import { Contact } from '../components/Contact'

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Experiences />
      <Events />
      <Gallery />
      <Social />
      <Contact />
    </>
  )
}
