export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products")
  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }
  return res.json()
}

export async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch product")
  }
  return res.json()
}

