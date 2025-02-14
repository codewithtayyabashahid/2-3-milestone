"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Navigation.module.css"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          AestheticWeb
        </Link>
        <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`${styles.navList} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

