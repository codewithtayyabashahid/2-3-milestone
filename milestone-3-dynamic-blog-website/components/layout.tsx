import Link from "next/link"
import type React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-pink-500 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-600 hover:text-pink-500 transition duration-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-pink-500 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500">
          © 2023 TechBlossom Blog. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

