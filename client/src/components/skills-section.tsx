import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Gamepad2, 
  Brain, 
  Layers, 
  Zap,
  Users
} from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["C#", "C++", "Python"],
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      title: "Game Engines",
      icon: <Gamepad2 className="h-5 w-5" />,
      skills: ["Unity 2D/3D", "Unreal Engine"],
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      title: "XR Technologies",
      icon: <Layers className="h-5 w-5" />,
      skills: ["Virtual Reality (VR)", "Augmented Reality (AR)", "Mixed Reality (MR)", "ARKit/ARCore", "OpenXR", "Vuforia"],
      color: "bg-purple-100 text-purple-800 border-purple-200"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-5 w-5" />,
      skills: ["PyTorch", "AI Integration", "Real-time Systems", "ML Pipelines"],
      color: "bg-orange-100 text-orange-800 border-orange-200"
    },
    {
      title: "Core Competencies",
      icon: <Zap className="h-5 w-5" />,
      skills: ["Multiplayer Systems", "Performance Optimization", "Asset Streaming", "Cross-platform Development"],
      color: "bg-emerald-100 text-emerald-800 border-emerald-200"
    },
    {
      title: "Development Tools",
      icon: <Users className="h-5 w-5" />,
      skills: ["GitHub", "Blender", "CI/CD Pipelines", "Agile Development", "Performance Profiling"],
      color: "bg-indigo-100 text-indigo-800 border-indigo-200"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning game development, AI integration, and immersive XR experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-3">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`${category.color} text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}