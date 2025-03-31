'use client'

import { useEffect } from 'react'

export function useScrollToHash() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1)
      
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 300)
      }
    }
    
    handleHashScroll()
    
    window.addEventListener('hashchange', handleHashScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])
}