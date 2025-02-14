import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Photography Website",
  description: "A beautiful multi-page website created with Next.js and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Aesthetic
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300">
                  Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2025 Aesthetic Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

