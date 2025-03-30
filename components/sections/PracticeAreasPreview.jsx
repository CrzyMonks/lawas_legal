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
      description: "Comprehensive legal services for businesses and commercial transactions",
      icon: Building2,
      id: "commercial-law"
    },
    {
      title: "Company Law",
      description: "Expert guidance in corporate governance and compliance",
      icon: Scale,
      id: "company-law"
    },
    {
      title: "Litigation",
      description: "We deliver expert litigation services, focusing on dispute resolution and court representation.",
      icon: GavelIcon,
      id: "litigation"
    },
    {
      title: "Arbitration and Dispute Resolution",
      description: "Pioneering arbitration and dispute resolution with tailored legal strategies",
      icon: FileSymlink,
      id: "arbitration"
    },
    {
      title: "Consumer Law",
      description: "Advocating for consumer rights with expert legal solutions and enforcement.",
      icon: ShieldAlert,
      id: "consumer-law"
    },
    {
      title: "Criminal Law",
      description: "Expert criminal law services focusing on defense, advocacy, and justice",
      icon: BadgeAlert,
      id: "criminal-law"
    },
    {
      title: "Debt Recovery & SARFAESI Act",
      description: "Enforcing creditor rights with expert debt recovery and SARFAESI Act support",
      icon: Banknote,
      id: "debt-recovery"
    }
  ]

  // Function to handle navigation to all practice areas
  const handleViewMore = () => {
    router.push('/practice-areas')
  }

  // Function to navigate to a specific practice area
  const navigateToArea = (id) => {
    router.push(`/practice-areas#${id}`)
  }

  return (
    <section className="bg-lawas-heading py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-3xl font-bold text-lawas-accent sm:text-4xl">
            Practice Areas
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Our expertise spans across multiple legal domains, providing comprehensive solutions for all your legal needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center cursor-pointer hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigateToArea(area.id)}
            >
              <div className="mb-4 p-3 rounded-full bg-lawas-button/20">
                <area.icon className="w-8 h-8 text-lawas-button" />
              </div>
              <h3 className="text-xl font-semibold text-lawas-accent mb-2">
                {area.title}
              </h3>
              <p className="text-lawas-accent/70 text-sm">
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