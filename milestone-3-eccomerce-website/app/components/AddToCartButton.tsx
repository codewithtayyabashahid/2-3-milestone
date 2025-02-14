"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Product } from "../../lib/api"

export default function AddToCartButton({ product }: { product: Product }) {
  console.log(product)
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <motion.button
      className={`px-6 py-3 rounded-full font-semibold text-white ${
        isAdded ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
      }`}
      onClick={handleAddToCart}
      whileTap={{ scale: 0.95 }}
    >
      {isAdded ? "Added to Cart!" : "Add to Cart"}
    </motion.button>
  )
}

