'use client'

import { animate, stagger } from "motion"
import { useEffect, useRef, useState } from "react"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Linkedin, Instagram, MapPin, Mail, Phone, Clock, CheckCircle, User } from 'lucide-react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const containerRef = useRef(null)
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_q2g6p5a', 'template_23pem55', form.current, {
        publicKey: 'KL0IZBv3seh4BC5q2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setShowSuccess(true);
          setIsSubmitting(false);
          setTimeout(() => {
            setShowSuccess(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
        },
      );
  };

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
    <section id="contact" className="bg-lawas-contact py-24">
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
            <div className="animate-fade-in rounded-lg bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <h3 className="text-lg md:text-lg font-bold text-yellow-500 mb-6 text-center uppercase tracking-wider bg-white/10 py-4 px-6 rounded-lg shadow-lg backdrop-blur-sm border-2 border-yellow-500/20 transform hover:scale-105 transition-transform duration-300">Get Free Legal Consultation</h3>
              {showSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold text-lawas-accent mb-2">Message Sent Successfully!</h3>
                  <p className="text-white">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full text-lawas-accent"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full text-lawas-accent"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="number"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="w-full text-lawas-accent"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Query"
                      className="min-h-[150px] w-full text-lawas-accent"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-lawas-button text-white hover:bg-lawas-button/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>

            <div className="animate-fade-in space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-button">
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
                  <h3 className="mb-2 text-xl font-semibold text-lawas-button">
                    Contact Information
                  </h3>
                  <p className="text-white">
                    <a href="mailto:lawaslegal@gmail.com" className="hover:underline">lawaslegal@gmail.com</a>
                  </p>
                  <div className="mt-2 space-y-1 text-white">
                    <a href="tel:+919871873194" className="hover:underline block">
                      +91 9871873194
                    </a>
                    <a href="tel:+919871833230" className="hover:underline block">
                      +91 9871833230
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-button">
                    Business Hours
                  </h3>
                  <p className="text-white">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-start gap-3">
                <User className="w-6 h-6 text-lawas-button mt-1 flex-shrink-0" />
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-lawas-button">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/company/lawas-legal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-lawas-accent/80 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.instagram.com/lawas_legal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-lawas-accent/80 transition-colors"
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