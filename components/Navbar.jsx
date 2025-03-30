'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleContactClick = (e) => {
    e.preventDefault()
    
    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== '/') {
      router.push('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    } else {
      // If we're already on the home page, just scroll
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/legal-logo-removebg-preview.png"
              alt="LawAS Legal Logo"
              width={200}
              height={133}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
            >
              About
            </Link>
            <Link 
              href="/practice-areas" 
              className={`${pathname === '/practice-areas' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
            >
              Practice Areas
            </Link>
            <Button 
              className="bg-lawas-button text-white hover:bg-lawas-button/90"
              onClick={handleContactClick}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-lawas-heading"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className="fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm md:hidden transform transition-transform duration-300 ease-in-out"
            style={{ marginTop: '64px' }}
          >
            <div className="flex flex-col items-center justify-start h-full pt-8 animate-slideDown">
              <Link
                href="/"
                className={`block w-full px-3 py-4 text-lg text-center ${pathname === '/' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block w-full px-3 py-4 text-lg text-center ${pathname === '/about' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/practice-areas"
                className={`block w-full px-3 py-4 text-lg text-center ${pathname === '/practice-areas' ? 'text-lawas-heading font-semibold' : 'text-lawas-body'} hover:text-lawas-heading`}
                onClick={() => setIsMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <button
                className="block w-full px-3 py-4 text-lg text-center text-lawas-body hover:text-lawas-heading"
                onClick={handleContactClick}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 