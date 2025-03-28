import Hero from '@/components/sections/Hero'
import VideoSection from '@/components/sections/VideoSection'
import AboutPreview from '@/components/sections/AboutPreview'
import Partners from '@/components/sections/Partners'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="w-full bg-lawas-heading">
      <Hero />
      <VideoSection />
      <AboutPreview />
      <Partners />
      <Contact /> 
    </div>
  )
}
