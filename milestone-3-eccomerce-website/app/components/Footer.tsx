import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-lg font-semibold">ShopNext</h3>
            <p className="mt-2 text-sm">Your one-stop shop for everything</p>
          </div>
          <div className="w-full md:w-1/3 text-center mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
              <Link href="/" className="text-sm hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-sm hover:text-gray-400">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right mt-4 md:mt-0">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2 text-sm">Email: info@shopnext.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">&copy; 2023 ShopNext. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer

