'use client'

import { animate, stagger } from "motion"
import { useEffect, useRef } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

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
            <div className="animate-fade-in rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-sm">
              <form className="space-y-4" action="https://formsubmit.co/crzymonks@gmail.com" method="POST">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="YourName"
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
                    placeholder="Your Message"
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
              <div>
                <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                  Office Location
                </h3>
                <p className="text-white">
                  A-65, basement, office no. 5,<br />
                  Sector – 4, Noida, U.P. – 201301
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                  Contact Information
                </h3>
                <p className="text-white">
                  Email: <a href="mailto:lawaslegal@gmail.com" className="text-lawas-accent hover:underline">lawaslegal@gmail.com</a><br />
                  Phone: <a href="tel:+919871873194" className="text-lawas-accent hover:underline">+91 9871873194</a><br />
                  <a href="tel:+919871833230" className="text-lawas-accent hover:underline">+91 9871833230</a>
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                  Business Hours
                </h3>
                <p className="text-white">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday - Sunday: By Appointment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 