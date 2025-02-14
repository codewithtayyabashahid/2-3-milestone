"use client"

import { useState } from "react"
import styles from "./ClickCounter.module.css"

export default function ClickCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.counter}>
      <p>Click Count: {count}</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  )
}

