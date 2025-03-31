'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

export default function Disclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasAccepted = localStorage.getItem('disclaimerAccepted')
    if (!hasAccepted) {
      setShowDisclaimer(true)
      // Disable scrolling when disclaimer is shown
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true')
    setShowDisclaimer(false)
    // Re-enable scrolling when disclaimer is accepted
    document.body.style.overflow = 'unset'
  }

  if (!mounted) return null

  return (
    <AnimatePresence>
      {showDisclaimer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg max-w-2xl mx-auto p-8"
          >
            <h2 className="text-2xl font-bold text-lawas-heading mb-4 text-center">
              DISCLAIMER
            </h2>
            <p className="text-lawas-body mb-6 text-justify">
              The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. 
              By accessing this website, <span className="font-semibold text-lawas-overlay">www.lawaslegal.com</span>, you acknowledge and confirm that you are seeking information 
              relating to LawAS Legal of your own accord and that there has been no form of solicitation, advertisement 
              or inducement by LawAS Legal or its members. The content of this website is for informational purposes only 
              and should not be interpreted as soliciting or advertisement. No material/information provided on this website 
              should be construed as legal advice. LawAS Legal shall not be liable for consequences of any action taken by 
              relying on the material/information provided on this website.
            </p>
            <div className="text-center">
              <Button 
                className="bg-lawas-button text-white hover:bg-lawas-button/90"
                onClick={handleAccept}
              >
                I ACCEPT THE ABOVE
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 