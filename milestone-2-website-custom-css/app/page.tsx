import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to AestheticWeb</h1>
          <p>Creating beautiful and functional websites</p>
          <Link href="/contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </section>
      <section className={`${styles.features} section`}>
        <div className="container">
          <h2>Our Features</h2>
          <div className={styles.featureGrid}>
            <div className="card">
              <Image src="/placeholder.svg" alt="Responsive Design" width={64} height={64} />
              <h3>Responsive Design</h3>
              <p>Our websites look great on all devices, from mobile to desktop.</p>
            </div>
            <div className="card">
              <Image src="/placeholder.svg" alt="Fast Performance" width={64} height={64} />
              <h3>Fast Performance</h3>
              <p>Optimized for speed to ensure the best user experience.</p>
            </div>
            <div className="card">
              <Image src="/placeholder.svg" alt="SEO Friendly" width={64} height={64} />
              <h3>SEO Friendly</h3>
              <p>Built with search engines in mind to help you rank higher.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

