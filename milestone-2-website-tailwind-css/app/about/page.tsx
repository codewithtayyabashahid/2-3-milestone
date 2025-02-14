import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-96">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Team working together"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            We are a passionate team of artists, photographers, and designers dedicated to bringing beauty into the
            world through our curated collection of aesthetic images.
          </p>
          <p className="text-lg mb-4">
            Our mission is to inspire, uplift, and transport our viewers to places of wonder and tranquility through the
            power of visual art.
          </p>
          <p className="text-lg">
            Join us on this journey of exploration and discover the beauty that surrounds us every day.
          </p>
        </div>
      </div>
    </div>
  )
}

