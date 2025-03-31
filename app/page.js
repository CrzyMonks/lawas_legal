import Hero from '@/components/sections/Hero'
// import VideoSection from '@/components/sections/VideoSection'   
import AboutPreview from '@/components/sections/AboutPreview'
import PracticeAreasPreview from '@/components/sections/PracticeAreasPreview'
import Partners from '@/components/sections/Partners'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero />
      {/* <VideoSection /> */}
      <AboutPreview />
      <PracticeAreasPreview />
      <Partners />
      <Testimonials />
      <Contact /> 
    </div>
  )
}
