import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Disclaimer from '@/components/Disclaimer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LawAS Legal - Expert Legal Solutions",
  description: "Expert Legal Solutions Tailored for You",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      >
        <Disclaimer />
        <Navbar />
        <main className="relative flex min-h-screen flex-col pt-16">
          <Analytics/>
          <SpeedInsights/>
          {children}
        </main>
      </body>
    </html>
  )
}
