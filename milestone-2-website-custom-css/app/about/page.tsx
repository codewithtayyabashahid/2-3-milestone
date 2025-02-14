import styles from "./about.module.css"
import Image from "next/image"

export default function About() {
  return (
    <div className={`${styles.about} section`}>
      <div className="container">
        <h1>About Us</h1>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              At AestheticWeb, we are passionate about creating beautiful and functional websites that help businesses
              thrive in the digital world. Our team of expert designers and developers work tirelessly to deliver
              high-quality solutions tailored to each client`s unique needs.
            </p>
            <p>
              With years of experience in the industry, we understand the importance of staying up-to-date with the
              latest web technologies and design trends. This allows us to create websites that not only look great but
              also perform exceptionally well.
            </p>
          </div>
          <div className={styles.image}>
            <Image 
             src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
             alt="About Us"
             width={400}
             height={300} 
             />
          </div>
        </div>
      </div>
    </div>
  )
}

