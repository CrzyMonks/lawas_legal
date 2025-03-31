'use client'
import Image from 'next/image'
import { animate, motion, stagger } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Partners() {
  const [loadedImages, setLoadedImages] = useState({})
  const containerRef = useRef(null)
  const router = useRouter()

  const partners = [
    {
      name: "ALANKRIT BHATNAGAR",
      role: "Co-Founder",
      image: "/images/ALANKRIT-removebg-preview.png"
    },
    {
      name: "SHASHANK TIWARI",
      role: "Co-Founder",
      image: "/images/SHASHANK-removebg-preview.png"
    }
  ]

  const handleImageLoad = (name) => {
    setLoadedImages(prev => ({
      ...prev,
      [name]: true
    }))
  }

  const handlePartnerClick = (e) => {
    e.preventDefault()
    
    router.push('/about')
    setTimeout(() => {
      const partnersSection = document.getElementById('partners-section')
      if (partnersSection) {
        partnersSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  useEffect(() => {
    if (containerRef.current) {
      animate(
        ".animate-fade-in",
        { 
          opacity: [0, 1],
          y: [20, 0]
        },
        {
          duration: 0.8,
          delay: stagger(0.2)
        }
      )
    }
  }, [])

  return (
    <section className="bg-lawas-background py-24">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-3xl font-bold text-lawas-heading sm:text-4xl">
            Our Partners
          </h2>

          <div className="mb-12 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`animate-fade-in mx-auto flex flex-col items-center w-full transition-opacity duration-500 ${
                  loadedImages[partner.name] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="relative mb-6 aspect-square w-[300px] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                    onLoad={() => handleImageLoad(partner.name)}
                    sizes="(max-width: 768px) 90vw, 300px"
                  />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-black">
                  {partner.name}
                </h3>
                <p className="text-lg text-black">
                  {partner.role}
                </p>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg"
              className="bg-lawas-button text-white hover:bg-lawas-button/90"
              onClick={handlePartnerClick}
            >
              Meet Our Partners
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 