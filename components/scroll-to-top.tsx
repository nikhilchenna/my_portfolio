"use client"

<<<<<<< HEAD
import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Function to toggle visibility based on scroll position
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility)

    // Initial check in case page loads scrolled down
    toggleVisibility()

    // Clean up event listener
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])
=======
import { useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(true) // Always visible
>>>>>>> f661e25903a3894d5d1dd442d160fb6eb5c164f8

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
<<<<<<< HEAD
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
=======
    <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
      <ArrowUp className="h-5 w-5" />
    </button>
>>>>>>> f661e25903a3894d5d1dd442d160fb6eb5c164f8
  )
}
