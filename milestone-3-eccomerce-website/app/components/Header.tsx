"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const Header = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            ShopNext
          </Link>
          <div className="flex items-center">
            <Link href="/" className="mx-4 text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/products" className="mx-4 text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link href="/cart" className="ml-4 text-gray-600 hover:text-gray-800">
              <ShoppingCart />
            </Link>
          </div>
        </div>
        <motion.div
          className="h-1 bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        />
      </nav>
    </header>
  )
}

export default Header

