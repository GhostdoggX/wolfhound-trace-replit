import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: {
    template: '%s | Wolfhound Trace',
    default: 'Wolfhound Trace | Expert OSINT & Digital Intelligence Services',
  },
  description:
    "Wolfhound Trace provides expert OSINT Investigation, Corporate Investigation Services, Physical Security Specialist solutions, HUMINT Services, and Physical and Cyber Security Fusion. Discreet, precise, and legally grounded methods.",
  keywords: [
    'Physical Security Specialist',
    'Corporate Investigation Services', 
    'OSINT Investigation',
    'Physical and Cyber Security Fusion',
    'Wolfhound Trace Investigation',
    'HUMINT Services',
    'Digital Forensics',
    'Due Diligence',
    'Cryptocurrency Tracing',
    'Executive Protection',
    'Threat Assessment',
    'Asset Discovery',
  ],
  generator: "v0.app",
  metadataBase: new URL('https://wolfhoundtrace.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Wolfhound Trace',
    type: 'website',
    locale: 'en_IE',
    title: 'Wolfhound Trace | Expert OSINT & Digital Intelligence',
    description: 'Professional OSINT Investigation, Corporate Investigation Services, Physical Security Specialist solutions, and HUMINT Services with discretion and precision.',
    url: 'https://wolfhoundtrace.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolfhound Trace | Expert OSINT & Digital Intelligence',
    description: 'Professional tracking, OSINT investigation, and corporate security services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
