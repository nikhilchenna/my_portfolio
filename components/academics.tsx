import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const academicData = [
  {
    degree: "Bachelor of Technology in Computer Science(AIML)",
    institution: "Reva University",
    years: "2023 - 2026",
    achievements: "GPA: 8.16/10",
    highlights: ["Artificial Intelligence", "Machine Learning", "Data Structures", "Algorithms", "Software Engineering"],
  },
  {
    degree: "Diploma In Electrical and Electronics Engineering",
    institution: "Sanjay Gandhi Polytechnic",
    years: "2019 - 2022",
    achievements: "Percentage: 83/100",
    highlights: ["HTML", "CSS", "JavaScript"],
  },
  {
    degree: "High School",
    institution: "Don Bosco School",
    years: "2018 - 2019",
    achievements: "84%",
    highlights: ["Football Player", "Chess Player"],
  },
]

export default function Academics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {academicData.map((item, index) => (
        <Card key={index} className="overflow-hidden transition-all card-hover">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="text-xl">{item.degree}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <p className="font-medium">{item.institution}</p>
              <p className="text-sm text-muted-foreground">{item.years}</p>
            </div>
            <div>
              <p className="font-medium">Achievements</p>
              <p className="text-sm">{item.achievements}</p>
            </div>
            <div>
              <p className="font-medium mb-2">Highlights</p>
              <div className="flex flex-wrap gap-2">
                {item.highlights.map((highlight, i) => (
                  <Badge key={i} variant="secondary">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
