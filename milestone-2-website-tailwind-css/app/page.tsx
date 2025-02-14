import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Our Photographic World</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-4">
            Immerse yourself in a world of beauty and inspiration. Our curated collection of aesthetic images will
            transport you to places of wonder and tranquility.
          </p>
          <p className="text-lg">Explore our gallery, learn about our mission, and join us on this visual journey.</p>
        </div>
        <div className="relative h-96">
          <Image
            src="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Aesthetic landscape"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

