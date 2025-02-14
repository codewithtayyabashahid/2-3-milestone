import styles from "./contact.module.css"
import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className={`${styles.contact} section`}>
      <div className="container">
        <h1>Contact Us</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <p>Have any questions? Feel free to reach out to us using the form or contact information below.</p>
            <div className={styles.contactInfo}>
              <p>
                <strong>Email:</strong> info@aestheticweb.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p>
                <strong>Address:</strong> 123 Web Street, Internet City, 12345
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

