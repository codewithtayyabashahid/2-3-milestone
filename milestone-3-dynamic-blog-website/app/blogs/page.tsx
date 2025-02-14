import Link from "next/link"
import Layout from "../../components/layout"
import { getAllPosts } from "../../lib/posts"

export default function Blogs() {
  const posts = getAllPosts()

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">All Blog Posts</h1>
      <div className="space-y-8">
        {posts.map((post) => (
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

