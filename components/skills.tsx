import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Globe, Server, Palette, Terminal, GitBranch, Cpu, Wrench, Cloud } from "lucide-react"

const skillsData = {
  languages: [
    { name: "Java", icon: <Code className="h-5 w-5" /> },
    { name: "JavaScript", icon: <Code className="h-5 w-5" /> },
    { name: "C", icon: <Terminal className="h-5 w-5" /> },
    { name: "HTML/CSS", icon: <Globe className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
  ],
  frameworks: [
    { name: "React.js", icon: <Code className="h-5 w-5" /> },
    { name: "Next.js", icon: <Server className="h-5 w-5" /> },
    { name: "Express", icon: <Server className="h-5 w-5" /> },
  ],
  tools: [
    { name: "Git", icon: <GitBranch className="h-5 w-5" /> },
    { name: "Github", icon: <GitBranch className="h-5 w-5" /> },
  ],
}

export default function Skills() {
  return (
    <Tabs defaultValue="languages" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="languages">Languages</TabsTrigger>
        <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
        <TabsTrigger value="tools">Tools</TabsTrigger>
      </TabsList>

      {Object.entries(skillsData).map(([category, skills]) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="transition-all hover:shadow-md hover:bg-primary/5">
                <CardContent className="flex items-center gap-3 p-4">
                  {skill.icon}
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
