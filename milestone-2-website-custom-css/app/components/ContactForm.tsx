"use client"

import { useState } from "react"
import styles from "./ContactForm.module.css"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", { name, email, message })
    setSubmitted(true)
  }

  if (submitted) {
    return <p className={styles.success}>Thank you for your message! We`ll get back to you soon.</p>
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  )
}

