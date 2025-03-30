'use client'

import { useEffect } from 'react'

export function useScrollToHash() {
  useEffect(() => {
    // Function to handle the hash fragment when page loads
    const handleHashScroll = () => {
      // Get the hash from the URL (without the '#')
      const hash = window.location.hash.substring(1)
      
      if (hash) {
        // Give the browser a moment to render everything
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            // Scroll to the element
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      }
    }
    
    // Run on initial load
    handleHashScroll()
    
    // Also listen for hashchange events (for browser back/forward navigation)
    window.addEventListener('hashchange', handleHashScroll)
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])
}