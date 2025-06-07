import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projectsData = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "https://example.com/demo1",
    githubLink: "https://github.com/johndoe/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    demoLink: "https://example.com/demo2",
    githubLink: "https://github.com/johndoe/taskmanager",
  },
  {
    title: "AI Image Generator",
    description: "An application that generates images based on text prompts using machine learning models.",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/johndoe/ai-image-gen",
  },
  {
    title: "Personal Finance Tracker",
    description: "A web application to track expenses, income, and provide financial insights with visualizations.",
    techStack: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS"],
    demoLink: "https://example.com/demo4",
    githubLink: "https://github.com/johndoe/finance-tracker",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard to manage and analyze social media accounts and engagement metrics.",
    techStack: ["React", "Redux", "Express", "PostgreSQL"],
    demoLink: "https://example.com/demo5",
    githubLink: "https://github.com/johndoe/social-dashboard",
  },
  {
    title: "Weather Forecast App",
    description: "A weather application providing forecasts, alerts, and historical weather data.",
    techStack: ["React Native", "OpenWeather API", "Node.js"],
    demoLink: "https://example.com/demo6",
    githubLink: "https://github.com/johndoe/weather-app",
  },
]

export default function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project, index) => (
        <Card key={index} className="flex flex-col h-full card-hover">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button variant="outline" size="sm" className="button-hover" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
            <Button size="sm" className="button-hover" asChild>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
