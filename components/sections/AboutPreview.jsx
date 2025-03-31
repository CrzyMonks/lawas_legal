'use client'
import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPreview() {
  return (
    <section id="about-preview" className="lawas-overlay min-h-screen flex items-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/lawas_bg.jpg"
          alt="Law Office Background"
          fill
          className="object-cover"
          priority
        />
        {/* Light overlay */}
        <div className="absolute inset-0 bg-lawas-contact/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About LawAS Legal
          </motion.h2>
          
          <div className="relative flex justify-center">
            <motion.p 
              className="mb-12 text-xl text-white px-8 text-center max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At LawAS Legal, we are a dynamic and client-focused law firm based in Delhi, serving a diverse clientele across India. Our team brings deep expertise in handling complex legal matters spanning corporate and commercial law, dispute resolution, real estate, energy, infrastructure, and arbitration.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button 
                size="lg"
                className="bg-lawas-button text-white hover:bg-lawas-button/90 text-lg px-8 py-6"
              >
                Learn More About Us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 