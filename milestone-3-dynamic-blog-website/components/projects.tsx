import Image from "next/image"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce website built with Next.js and Tailwind CSS.",
    image: "https://picsum.photos/seed/project1/800/600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A sleek task management application with real-time updates using Next.js and Firebase.",
    image: "https://picsum.photos/seed/project2/800/600",
    tags: ["Next.js", "TypeScript", "Firebase", "React Query"],
  },
  {
    title: "Personal Finance Dashboard",
    description: "An interactive dashboard for tracking personal finances with beautiful charts and graphs.",
    image: "https://picsum.photos/seed/project3/800/600",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind CSS"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

