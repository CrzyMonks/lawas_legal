'use client'

import { motion } from "motion/react"
import Image from 'next/image'

export default function AboutPage() {
  const partners = [
    {
      name: "ALANKRIT BHATNAGAR",
      role: "Co-Founder",
      image: "/images/partner-1.jpg",
      bio: "Alankrit, Co-Founder of LawAS Legal, is an experienced lawyer with expertise in Civil and Commercial Litigation, Arbitration, Insolvency, Bankruptcy, and Real Estate law. He has represented clients in the Supreme Court of India, High Courts, District Courts, and various tribunals nationwide. His impressive track record includes successfully representing MNCs in recovery suits and negotiable instrument cases, advising companies on contract execution and compliance, handling high-stakes arbitrations, drafting extensive legal documents, and representing hundreds of homebuyers in significant cases. Alankrit regularly appears in courts across India and has worked alongside senior advocates while helping companies develop strategic legal approaches"
    },
    {
      name: "SHASHANK TIWARI",
      role: "Co-Founder",
      image: "/images/partner-2.jpg",
      bio: "Shashank, Co-Founder of LawAS Legal, is a distinguished lawyer specializing in arbitration, infrastructure projects, intellectual property, and technology law. He represents clients at all court levels including the Supreme Court. His expertise spans domestic arbitration, large-scale infrastructure advisory, IP protection and licensing, and legal guidance on emerging technologies, data protection, and digital regulations. Known for his strategic approach and deep legal knowledge, he consistently delivers successful outcomes across diverse sectors."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* About Company Section */}
      <section className="bg-lawas-heading py-24 h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold text-lawas-accent sm:text-5xl">
              About LawAS Legal
            </h1>
            <p className="mb-8 text-lg text-white text-justify">
            LawAS Legal is a dynamic and experienced law firm rapidly expanding across India, with a strong reputation for handling complex legal matters in corporate, commercial, dispute resolution, real estate, energy and infrastructure, arbitration. It aims to serve a diverse range of clients, from small businesses to large corporations, with tailored legal solutions for it's clients. Focused on strategic growth, the firm is handling matters across the country, leveraging technology, and maintaining a client-centric approach to deliver high-quality services. It's commitment to professionalism, integrity, and excellence positions it as a future national leader in the legal field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners-section" className="bg-lawas-heading py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-lawas-accent sm:text-4xl">
              Our Partners
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mx-auto mb-6 aspect-square w-64 overflow-hidden rounded-lg">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-lawas-accent">
                    {partner.name}
                  </h3>
                  <p className="mb-4 text-white">
                    {partner.role}
                  </p>
                  <p className="text-white text-justify">
                    {partner.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-lawas-heading py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-lawas-accent sm:text-4xl">
              Our Vision
            </h2>
            <br />
            <div className="relative">
              {/* Opening Quote Image */}
              <div className="absolute -left-2 sm:-left-8 -top-6 sm:-top-8">
                <Image
                  src="/images/quotes.png"
                  alt="Opening quote"
                  width={40}
                  height={40}
                  className="opacity-50 sm:w-[60px] sm:h-[60px]"
                />
              </div>
              
              <p className="text-lg text-white px-8 sm:px-12 pt-4">
                To become a leading and trusted law firm recognized for our unwavering commitment to excellence, integrity, and client-centered solutions. We aspire to provide innovative, effective legal counsel across diverse industries, building long-lasting relationships based on trust, professionalism, and results. By leveraging our deep expertise, cutting-edge technology, and a personalized approach, we aim to be the preferred choice for clients seeking strategic guidance, problem-solving, and unmatched legal representation. Through our dedication to continuous growth and service excellence, we strive to not only meet but exceed our clients' expectations, shaping a future where justice and business success go hand in hand.
              </p>

              {/* Closing Quote Image */}
              <div className="absolute -right-2 sm:-right-8 -top-6 sm:-top-8">
                <Image
                  src="/images/double-quotes.png"
                  alt="Closing quote"
                  width={40}
                  height={40}
                  className="opacity-50 sm:w-[60px] sm:h-[60px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 