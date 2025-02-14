import { notFound } from "next/navigation"
import Layout from "../../../components/layout"
import Comments from "../../../components/comments"
import { getPostBySlug } from "../../../lib/posts"

interface PageParams {
  slug: string
}

export default async function BlogPost({ params }: { params: Promise<PageParams> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
    return null // This line is added to satisfy TypeScript
  }

  return (
    <Layout>
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
      <Comments slug={slug} />
    </Layout>
  )
}

