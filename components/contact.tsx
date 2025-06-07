"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000)
    }, 1500)
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {submitSuccess && (
              <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
            )}
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Connect With Me</h3>
          <p className="text-muted-foreground">
            Feel free to reach out through the contact form or connect with me on social media. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium">Find me on</h4>
          <div className="flex flex-col space-y-3">
            <a
              href="https://github.com/nikhilchenna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>https://github.com/nikhilchenna</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-chenna-863245240/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>https://www.linkedin.com/in/nikhil-chenna-863245240/</span>
            </a>
            <a
              href="nikhilchenna8@gmail.com"
              className="flex items-center space-x-3 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>nikhilchenna8@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
