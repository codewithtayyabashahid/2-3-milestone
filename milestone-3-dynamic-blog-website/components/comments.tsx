"use client"

import { useState } from "react"

export default function Comments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState("")

  console.log(slug)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment("")
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
          {comment}
        </div>
      ))}
      <form onSubmit={handleSubmit} className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={3}
          placeholder="Leave a comment..."
        />
        <button
          type="submit"
          className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
        >
          Post Comment
        </button>
      </form>
    </div>
  )
}

