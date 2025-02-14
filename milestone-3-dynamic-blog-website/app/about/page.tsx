import Layout from "../../components/layout"

export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About TechBlossom</h1>
      <div className="prose lg:prose-xl mx-auto">
        <p>
          Welcome to TechBlossom, a blog dedicated to exploring the fascinating world of technology and artificial
          intelligence through a feminine lens. Our mission is to make complex tech topics accessible and engaging for
          everyone, with a special focus on empowering women in the tech industry.
        </p>
        <p>
          Founded by a group of passionate female tech enthusiasts, TechBlossom aims to bridge the gender gap in
          technology by providing insightful articles, tutorials, and opinion pieces on the latest advancements in AI,
          machine learning, web development, and more.
        </p>
        <p>
          We believe that diversity in tech leads to more innovative and inclusive solutions. Through our content, we
          hope to inspire more women to pursue careers in technology and contribute their unique perspectives to this
          ever-evolving field.
        </p>
        <p>
          Join us on this exciting journey as we unravel the complexities of technology and showcase its beauty, one
          blossom at a time.
        </p>
      </div>
    </Layout>
  )
}

