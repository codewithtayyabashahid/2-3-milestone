export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Tayyaba Shahid. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-pink-400 transition duration-300">
            GitHub
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-pink-400 transition duration-300">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}

