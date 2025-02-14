export function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Node.js",
    "Git",
    "RESTful APIs",
    "GraphQL",
    "Responsive Design",
  ]

  return (
    <section id="skills" className="py-20 bg-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

