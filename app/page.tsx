"use client"

import { useEffect, useRef } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Academics from "@/components/academics"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  // Ref for sections that will animate on scroll
  const sectionsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    // Add animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    // Get all sections with the fade-in-up class
    const sections = document.querySelectorAll(".fade-in-up")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section id="home" className="py-10 md:py-16 fade-in-up">
          <Hero />
        </section>
        <section id="academics" className="py-10 md:py-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Academic Background</h2>
          <Academics />
        </section>
        <section id="projects" className="py-10 md:py-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <Projects />
        </section>
        <section id="skills" className="py-10 md:py-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <Skills />
        </section>
        <section id="contact" className="py-10 md:py-16 fade-in-up">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
