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
    <section id="contact" className="bg-white py-24">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="animate-fade-in mb-4 text-3xl font-bold text-lawas-heading sm:text-4xl">
              Contact Us
            </h2>
            <p className="animate-fade-in mb-12 text-xl text-lawas-accent font-semibold italic">
              Your Justice starts here - connect with us for your legal solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Form */}
            <div className="animate-fade-in rounded-lg bg-lawas-light p-6 shadow-lg">
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="w-full"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px] w-full"
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
                <h3 className="mb-2 text-xl font-semibold text-lawas-heading">
                  Office Location
                </h3>
                <p className="text-lawas-body">
                  A-65, basement, office no. 5,<br />
                  Sector – 4, Noida, U.P. – 201301
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-lawas-heading">
                  Contact Information
                </h3>
                <p className="text-lawas-body">
                  Email: <a href="mailto:lawaslegal@gmail.com" className="text-lawas-button hover:underline">lawaslegal@gmail.com</a><br />
                  Phone: <a href="tel:+919871873194" className="text-lawas-button hover:underline">+91 9871873194</a><br />
                  <a href="tel:+919871833230" className="text-lawas-button hover:underline">+91 9871833230</a>
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold text-lawas-heading">
                  Business Hours
                </h3>
                <p className="text-lawas-body">
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