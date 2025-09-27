import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://tobiade.xyz"),
  title: {
    default: "Tobi Adedapo",
    template: "%s | Tobi Adedapo",
  },
  description: "Developer, cardist and maker of things.",
  openGraph: {
    title: "Tobi Adedapo",
    description: "Developer, cardist and maker of things.",
    url: "https://tobiade.xyz",
    siteName: "Tobi Adedapo",
    locale: "en_US",
    type: "website",
    images: ["https://tobiade.xyz/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "Tobi Adedapo",
    card: "summary_large_image",
    creator: "@lostklan",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
