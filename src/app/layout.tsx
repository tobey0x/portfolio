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
  metadataBase: new URL("https://tobiloba.xyz"),
  title: {
    default: "tobiloba",
    template: "%s | tobiloba",
  },
  description: "Learning, building software, running or swimming, and gaming.",
  openGraph: {
    title: "tobiloba",
    description:
      "Learning, building software, running or swimming, and gaming.",
    url: "https://tobiloba.xyz",
    siteName: "tobiloba",
    locale: "en_US",
    type: "website",
    images: ["https://tobiloba.xyz/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "tobiloba",
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
