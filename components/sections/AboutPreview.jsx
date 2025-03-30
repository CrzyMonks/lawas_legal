'use client'
import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section id="about-preview" className="bg-lawas-heading min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="mb-8 text-4xl font-bold text-lawas-accent sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            About LawAS Legal
          </motion.h2>
          
          <div className="relative flex justify-center">
            <motion.p 
              className="mb-12 text-xl text-lawas-accent/70 px-8 text-center max-w-3xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              LawAS Legal is a dynamic and experienced law firm rapidly expanding across India, with a strong reputation for handling complex legal matters in corporate, commercial, dispute resolution, real estate, energy and infrastructure, arbitration.
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