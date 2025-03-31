'use client'
import { motion } from "motion/react"
import { useScrollToHash } from '@/app/utils/useScrollToHash'
import { useState, useEffect } from 'react'

export default function PracticeAreasPage() {
  useScrollToHash()
  const [highlightedSection, setHighlightedSection] = useState(null)
  
  useEffect(() => {
    // Check if we need to highlight a section
    const hash = window.location.hash.substring(1)
    
    if (hash) {
      setHighlightedSection(hash)
      
      // Remove highlight after 3 seconds
      const timer = setTimeout(() => {
        setHighlightedSection(null)
      }, 3000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const practiceAreas = [
    {
      id: "commercial-law",
      title: "Commercial Law",
      description: "Our firm specializes in Commercial Law, offering comprehensive legal services for businesses, firms, and individuals. With the enactment of the Commercial Courts Act, 2015, commercial disputes are now adjudicated through a specialized and efficient mechanism.",
      services: [
        "Litigation before Commercial Courts, High Courts, and the Supreme Court of India",
        "Legal Advisory on complex commercial transactions",
        "Drafting & Documentation of agreements, contracts, and legal instruments",
        "Negotiation & ADR for dispute resolution"
      ]
    },
    {
      id: "company-law",
      title: "Company Law",
      description: "The Companies Act, 1956 & 2013, regulated by the Ministry of Corporate Affairs, governs the formation and operations of companies in India. Compliance with statutory regulations is mandatory.",
      services: [
        "Drafting policies, contracts, and corporate governance documents",
        "Advisory on insolvency, mergers, winding up, and restructuring",
        "Representation before NCLT, NCLAT, and the Supreme Court"
      ]
    },
    {
      id: "litigation",
      title: "Litigation",
      description: "LawAS Legal has a renowned litigation practice, providing strategic legal solutions across diverse practice areas. Our legal team has extensive experience advocating for clients at all judicial levels, including the Supreme Court of India, various High Courts, district and subordinate courts, Tribunals, and specialized quasi-judicial bodies.",
      services: []
    },
    {
      id: "arbitration",
      title: "Arbitration and Dispute Resolution",
      description: "Arbitration is an efficient and expedited mechanism for resolving disputes. LawAS Legal provides comprehensive legal support in arbitration matters, including advisory services on dispute resolution, contract execution, and legal documentation.",
      services: [
        "Drafting arbitration agreements and pleadings",
        "Representation before Arbitral Tribunal",
        "Strategic legal counsel for dispute resolution"
      ]
    },
    {
      id: "consumer-law",
      title: "Consumer Law",
      description: "Under the Consumer Protection Act, 2019, we provide comprehensive legal assistance in consumer protection matters. Our expertise covers consumer dispute resolution through Consumer Forums at District, State, and National levels.",
      services: [
        "Drafting legal instruments and terms of service",
        "Representation before Consumer Forums",
        "Appeals before State and National Consumer Commissions"
      ]
    },
    {
      id: "criminal-law",
      title: "Criminal Law",
      description: "We provide comprehensive legal representation in all aspects of criminal litigation, handling matters before Executive and Judicial Magistrates, addressing law and order issues and trials for offenses under penal laws.",
      services: [
        "Regular Bail and Anticipatory Bail",
        "Appeals and Quashing Petitions",
        "Complete criminal trial representation",
        "Legal opinions on complex criminal law matters"
      ]
    },
    {
      id: "debt-recovery",
      title: "Debt Recovery & SARFAESI Act",
      description: "We specialize in banking and debt recovery laws under the SARFAESI Act, 2002, assisting cooperative and commercial banks in efficient debt recovery processes.",
      services: [
        "Representation before Debt Recovery Tribunal (DRT)",
        "High Court and Supreme Court litigation",
        "Strategic debt enforcement and resolution"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-lawas-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-bold text-lawas-heading sm:text-5xl">
            Practice Areas
          </h1>
          <p className="mb-16 text-lg text-lawas-body">
            Our firm offers expertise across a wide range of legal practice areas, providing comprehensive solutions tailored to your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                id={area.id}
                className={`rounded-lg p-8 backdrop-blur-sm scroll-mt-24 transition-all duration-500 ${
                  highlightedSection === area.id 
                  ? "bg-lawas-heading/10 shadow-lg ring-2 ring-lawas-button" 
                  : "bg-white shadow-lg"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-2xl font-bold text-lawas-heading">
                  {area.title}
                </h2>
                <p className="mb-6 text-lawas-body">
                  {area.description}
                </p>
                {area.services.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-lawas-body">
                        {service}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}