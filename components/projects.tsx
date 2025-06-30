import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projectsData = [
  {
    title: "Expense Tracker",
    description:
      "Developed an advanced expenditure tracking application featuring a powerful search functionality; implemented React hooks and styled components, resulting in a streamlined user experience that increased user engagement by 30%.",
    techStack: ["React.js", "HTML", "CSS"],
    demoLink: "https://trackernikhil.netlify.app/",
    githubLink: "https://github.com/nikhilchenna/Expense-Tracker.git",
  },
  {
    title: "ITJOBXS Clone",
    description:
      "Developed a fully responsive website clone of the ITJobxs company platform using HTML, CSS, and JavaScript; enhanced user interface features that improved site navigation speed by 25% based on usability testing feedback.",
    techStack: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://itjobsclone.netlify.app/",
    githubLink: "https://github.com/nikhilchenna/itjobxs-clone-web-page.git",
  },
  {
    title: "Portfolio Website",
    description:
      "Built a modern, responsive portfolio website using Next.js and TypeScript; implemented smooth animations, dark/light mode toggle, and optimized performance. Features include dynamic sections, contact forms, and mobile-first responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoLink: "https://nikhilcportfolio.netlify.app/",
    githubLink: "https://github.com/nikhilchenna/my_portfolio.git",
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
            <Button variant="outline" size="sm" className="button-hover bg-transparent" asChild>
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
