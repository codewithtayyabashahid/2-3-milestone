import Link from "next/link"
import Image from "next/image"
import { getProducts } from "../../lib/api"

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="aspect-w-1 aspect-h-1">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

