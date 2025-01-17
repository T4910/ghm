import { FAQ } from '@/components/faq'
import { FeaturedPhotos } from '@/components/featured-photos'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { MissionVision } from '@/components/mission-vision'
import { ServiceTimes } from '@/components/service-times'
import { Stats } from '@/components/stats'
import { SubUnits } from '@/components/sub-units'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-roboto tracking-tight">
      <Header />
      <main>
        <ServiceTimes />
        <Hero />
        <div className="font-grotesk">
          <MissionVision />
          <Stats />
          <FeaturedPhotos />
          <SubUnits />
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}

