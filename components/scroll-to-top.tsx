"use client"

import { useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true) // Always visible

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
