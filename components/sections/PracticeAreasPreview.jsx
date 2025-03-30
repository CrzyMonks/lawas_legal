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
      icon: Building2
    },
    {
      title: "Company Law",
      description: "Expert guidance in corporate governance and compliance",
      icon: Scale
    },
    {
      title: "Litigation",
      description: "Strategic legal solutions across diverse practice areas",
      icon: GavelIcon
    },
    {
      title: "Arbitration and Dispute Resolution",
      description: "Efficient resolution of complex legal disputes",
      icon: FileSymlink
    },
    {
      title: "Consumer Law",
      description: "Protection and advocacy in consumer rights matters",
      icon: ShieldAlert
    },
    {
      title: "Criminal Law",
      description: "Comprehensive criminal litigation and representation",
      icon: BadgeAlert
    },
    {
      title: "Debt Recovery & SARFAESI Act",
      description: "Specialized services in banking and debt recovery",
      icon: Banknote
    }
  ]

  const handleViewMore = () => {
    router.push('/practice-areas')
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
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
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