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
    text: "LawAS Legal provided exceptional legal support for our business. Their expertise in commercial law and attention to detail made complex legal matters manageable. Highly recommended for any corporate legal needs.",
    name: "Rajesh Kumar",
    company: "Tech Innovations Pvt. Ltd.",
    role: "CEO"
  },
  {
    text: "Working with LawAS Legal has been a game-changer for our company. Their proactive approach and deep understanding of corporate law helped us navigate challenging situations with confidence.",
    name: "Priya Sharma",
    company: "Global Solutions India",
    role: "Managing Director"
  },
  {
    text: "The team at LawAS Legal demonstrates exceptional professionalism and expertise. Their strategic guidance has been invaluable for our business operations and legal compliance.",
    name: "Amit Patel",
    company: "Sunrise Industries",
    role: "Legal Head"
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
                              src="/images/double-quotes.png"
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
                                {testimonial.role}, {testimonial.company}
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