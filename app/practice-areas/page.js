'use client'
import { motion } from "motion/react"

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
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
      title: "Company Law",
      description: "The Companies Act, 1956 & 2013, regulated by the Ministry of Corporate Affairs, governs the formation and operations of companies in India. Compliance with statutory regulations is mandatory.",
      services: [
        "Drafting policies, contracts, and corporate governance documents",
        "Advisory on insolvency, mergers, winding up, and restructuring",
        "Representation before NCLT, NCLAT, and the Supreme Court"
      ]
    },
    {
      title: "Litigation",
      description: "LawAS Legal has a renowned litigation practice, providing strategic legal solutions across diverse practice areas. Our legal team has extensive experience advocating for clients at all judicial levels, including the Supreme Court of India, various High Courts, district and subordinate courts, Tribunals, and specialized quasi-judicial bodies.",
      services: []
    },
    {
      title: "Arbitration and Dispute Resolution",
      description: "Arbitration is an efficient and expedited mechanism for resolving disputes. LawAS Legal provides comprehensive legal support in arbitration matters, including advisory services on dispute resolution, contract execution, and legal documentation.",
      services: [
        "Drafting arbitration agreements and pleadings",
        "Representation before Arbitral Tribunal",
        "Strategic legal counsel for dispute resolution"
      ]
    },
    {
      title: "Consumer Law",
      description: "Under the Consumer Protection Act, 2019, we provide comprehensive legal assistance in consumer protection matters. Our expertise covers consumer dispute resolution through Consumer Forums at District, State, and National levels.",
      services: [
        "Drafting legal instruments and terms of service",
        "Representation before Consumer Forums",
        "Appeals before State and National Consumer Commissions"
      ]
    },
    {
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
    <div className="min-h-screen bg-white py-24">
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
          className="mx-auto max-w-6xl space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="rounded-lg bg-lawas-light p-8 shadow-lg"
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
                <>
                  <h3 className="mb-3 text-lg font-semibold text-lawas-heading">
                    Our Services:
                  </h3>
                  <ul className="list-inside list-disc space-y-2 text-lawas-body">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="ml-4">
                        {service}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 