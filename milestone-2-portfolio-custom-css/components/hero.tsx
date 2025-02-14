import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <Image
          src="/img.avif?height=200&width=200"
          alt="Tayyaba Shahid"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-8 border-4 border-pink-300 shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Tayyaba Shahid</h1>
        <p className="text-xl text-gray-600 mb-8">Web Developer | Next.js | TypeScript | Tailwind CSS</p>
        <a
          href="#contact"
          className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

