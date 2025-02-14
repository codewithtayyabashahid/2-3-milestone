import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link href="#home" className="text-gray-800 hover:text-pink-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-800 hover:text-pink-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-gray-800 hover:text-pink-600 transition duration-300">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-gray-800 hover:text-pink-600 transition duration-300">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 hover:text-pink-600 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

