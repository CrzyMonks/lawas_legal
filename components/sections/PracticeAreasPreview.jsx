'use client'
import { motion } from "motion/react"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { 
  Building2, 
  Scale, 
  GavelIcon, 
  FileSymlink, 
  ShieldAlert, 
  BadgeAlert, 
  Banknote 
} from 'lucide-react'

export default function PracticeAreasPreview() {
  const router = useRouter()

  const practiceAreas = [
    {
      title: "Commercial Law",
      description: "Legal support for business and commercial transactions",
      icon: Building2,
      id: "commercial-law"
    },
    {
      title: "Company Law",
      description: "Guidance on corporate laws and regulations",
      icon: Scale,
      id: "company-law"
    },
    {
      title: "Litigation",
      description: "Expert legal representation in court disputes ",
      icon: GavelIcon,
      id: "litigation"
    },
    {
      title: "Arbitration and Dispute Resolution",
      description: "Professional resolution of conflicts outside court",
      icon: FileSymlink,
      id: "arbitration"
    },
    {
      title: "Consumer Law",
      description: "Defending consumer rights with legal expertise",
      icon: ShieldAlert,
      id: "consumer-law"
    },
    {
      title: "Criminal Law",
      description: "Trusted defense for criminal cases",
      icon: BadgeAlert,
      id: "criminal-law"
    },
    {
      title: "Debt Recovery & SARFAESI Act",
      description: "Effective legal solutions for debt enforcement",
      icon: Banknote,
      id: "debt-recovery"
    }
  ]

  const handleViewMore = () => {
    router.push('/practice-areas')
  }

  const navigateToArea = (id) => {
    router.push(`/practice-areas#${id}`)
  }

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
            Practice Areas
          </h2>
          <p className="text-lg text-lawas-body max-w-2xl mx-auto">
            Our expertise spans across multiple legal domains, providing comprehensive solutions for all your legal needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className={`bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition-shadow ${
                index === practiceAreas.length - 1 && practiceAreas.length % 3 === 1 
                  ? 'lg:col-start-2' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigateToArea(area.id)}
            >
              <div className="mb-4 p-3 rounded-full bg-lawas-button/20">
                <area.icon className="w-8 h-8 text-lawas-button" />
              </div>
              <h3 className="text-xl font-semibold text-lawas-heading mb-2">
                {area.title}
              </h3>
              <p className="text-lawas-body text-sm">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-lawas-button text-white hover:bg-lawas-button/90"
            onClick={handleViewMore}
          >
            View All Practice Areas
          </Button>
        </motion.div>
      </div>
    </section>
  )
}