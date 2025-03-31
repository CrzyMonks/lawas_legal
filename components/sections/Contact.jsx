'use client'

import { animate, stagger } from "motion"
import { useEffect, useRef } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Linkedin, Instagram, MapPin, Mail, Phone, Clock, User } from 'lucide-react'

export default function Contact() {
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
    <section id="contact" className="bg-lawas-heading py-24">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="animate-fade-in mb-4 text-3xl font-bold text-lawas-accent sm:text-4xl">
              Contact Us
            </h2>
            <p className="animate-fade-in mb-12 text-xl text-white font-semibold italic">
              Your Justice starts here - connect with us for your legal solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form - keeping the card style but updating colors */}
            <div className="animate-fade-in rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <form className="space-y-4" action="https://formsubmit.co/crzymonks@gmail.com" method="POST">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full text-lawas-accent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full text-lawas-accent"
                  />
                </div>
                <div>
                  <Textarea
                    name="msg"
                    placeholder="Your Query"
                    className="min-h-[150px] w-full text-lawas-accent"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-lawas-button text-white hover:bg-lawas-button/90"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                    Office Location
                  </h3>
                  <p className="text-white">
                    A-65, basement, office no. 5,<br />
                    Sector – 4, Noida, U.P. – 201301
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/NdRK19uWsco6fhqd6?g_st=iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lawas-button hover:text-lawas-button/80 mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex flex-col gap-2 mt-1">
                  <Mail className="w-6 h-6 text-lawas-button flex-shrink-0" />
                  {/* <Phone className="w-6 h-6 text-lawas-accent flex-shrink-0" /> */}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                    Contact Information
                  </h3>
                  <p className="text-white">
                    <a href="mailto:lawaslegal@gmail.com" className="text-lawas-button hover:underline">lawaslegal@gmail.com</a>
                  </p>
                  <div className="mt-2 space-y-1">
                    <a href="tel:+919871873194" className="text-lawas-button hover:underline block">
                      +91 9871873194
                    </a>
                    <a href="tel:+919871833230" className="text-lawas-button hover:underline block">
                      +91 9871833230
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                    Business Hours
                  </h3>
                  <p className="text-lawas-button">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-lawas-accent">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/company/lawas-legal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lawas-button hover:text-lawas-accent/80 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.instagram.com/lawas_legal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lawas-button hover:text-lawas-accent/80 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 