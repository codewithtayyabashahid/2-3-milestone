import Link from "next/link"
import Layout from "../components/layout"
import { getFeaturedPosts } from "../lib/posts"

export default function Home() {
  const featuredPosts = getFeaturedPosts()

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Welcome to TechBlossom</h1>
      <p className="text-center text-gray-600 mb-12">
        Exploring the latest in technology and AI, with a feminine touch.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {featuredPosts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link href={`/blogs/${post.slug}`} className="text-pink-500 hover:text-pink-600 transition duration-300">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

