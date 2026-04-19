import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Historia from '@/components/Historia'
import Menu from '@/components/Menu'
import OrigenSection from '@/components/OrigenSection'
import Ubicacion from '@/components/Ubicacion'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Historia />
      <Menu />
      <OrigenSection />
      <Ubicacion />
      <Footer />
    </main>
  )
}
