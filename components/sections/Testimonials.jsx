'use client'

import { motion } from "motion/react"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    text: "LawAS Legal offers top-notch legal services with a structured, client-focused approach. I am honored to be associated with such a committed and esteemed legal team.",
    name: "Ajay Kumar Thakur",
    // company: "",
    role: "Client"
  },
  {
    text: "Mr. Bhatnagar's legal guidance has always been crystal clear, with valuable step-by-step advice tailored to each case. His clarity and insight make every legal process smooth and understandable.",
    name: "Jagdishbhai Chaudhary",
    // company: "",
    role: "Client"
  },
  {
    text: "I'm grateful to have chosen Mr. Alankrit and his team—highly professional, empathetic, and genuinely committed to their clients. Their integrity and approachability make them truly stand out.",
    name: "Suvomoy Banerjee",
    // company: "",
    role: "Client"
  }
]

export default function Testimonials() {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="bg-lawas-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-lawas-heading sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="text-lg text-lawas-body max-w-2xl mx-auto">
            What our clients say about our legal services and expertise
          </p>
        </motion.div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-6">
                        <div className="relative">
                          <div className="absolute -top-2 -left-2">
                            <Image
                              src="/images/quotes.png"
                              alt="quotes"
                              width={24}
                              height={24}
                              className="opacity-50"
                            />
                          </div>
                          <div className="pt-6">
                            <p className="text-lawas-body mb-6 text-justify">
                              {testimonial.text}
                            </p>
                            <div className="border-t pt-4">
                              <p className="font-semibold text-lawas-heading">
                                {testimonial.name}
                              </p>
                              <p className="text-sm text-lawas-body">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Mobile Scroll Indicators */}
            <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? "w-4 bg-lawas-button" : "w-2 bg-lawas-button/30"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>

            {/* Swipe Indicator for Mobile - Shows only on first load */}
            <div className="absolute inset-0 pointer-events-none md:hidden">
              <div className="flex items-center justify-between h-full px-4 animate-pulse">
                <ChevronLeft className="w-6 h-6 text-lawas-button/50" />
                <ChevronRight className="w-6 h-6 text-lawas-button/50" />
              </div>
            </div>

            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
} 