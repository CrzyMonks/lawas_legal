'use client'

import { animate, motion, stagger } from "motion/react"
import { useEffect, useRef, useState } from "react"

export default function VideoSection() {
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

  return (
    <section id="video-section" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className={`absolute inset-0 transition-opacity duration-500`}>
        <video 
          controls
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
      <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-6 text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            EMPOWERING YOUR LEGAL SUCCESS
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LawAS Legal is a dynamic and experienced law firm rapidly expanding across India, with a strong reputation for handling complex legal matters in corporate, commercial, dispute resolution, real estate, energy and infrastructure, arbitration.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 