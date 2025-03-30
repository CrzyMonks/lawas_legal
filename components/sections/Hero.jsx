'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { animate, motion, stagger } from "motion/react"
import { useEffect, useRef, useState } from "react"

export default function Hero() {
  // const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const containerRef = useRef(null)
  
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

  const handleKnowMoreClick = () => {
    const nextSection = document.getElementById('about-preview')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full bg-lawas-heading">
      {/* Background with overlay */}
      {/* <div className={`absolute inset-0 bg-gradient-to-b from-lawas-heading to-lawas-heading/95 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src="/images/lawas_bg.jpg"
          alt="Legal office background"
          fill
          className="object-cover opacity-20"
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
        />
      </div> */}
      <div className={`absolute inset-0 transition-opacity duration-500`}>
        <video 
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-lawas-heading/70" />
      </div>

      {/* Content */}
      <div 
        ref={containerRef}
        className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="animate-fade-in mb-6 text-4xl font-bold text-lawas-accent sm:text-5xl lg:text-6xl">
            Expert Legal Solutions
            <br />
            <span className="text-lawas-accent/80">Tailored for You</span>
          </h1>
          
          <p className="animate-fade-in mx-auto mb-8 max-w-2xl text-lg text-lawas-accent/70">
            Providing comprehensive legal services with a commitment to excellence and client satisfaction
          </p>
          
          <div className="animate-fade-in">
            <Button 
              size="lg"
              className="bg-lawas-button text-white hover:bg-lawas-button/90"
              onClick={handleKnowMoreClick}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 