"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Nikhil C</h1>
        <p className="text-xl text-muted-foreground">
          Full-stack developer specializing in modern web technologies and creating intuitive user experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={scrollToProjects} className="group button-hover">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
          <Button
            variant="outline"
            className="button-hover"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-07%20at%2013.07.23_19d1a650.jpg-wmwvhGMhqeKQHHJ1FnoqvDBSFMojL3.jpeg"
            alt="Nikhil C"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
