import { Project } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ExternalLink, Github, Play, Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ar-vr":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "3d":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "2d":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ar-vr":
        return "AR/VR";
      case "3d":
        return "3D Game";
      case "2d":
        return "2D Game";
      default:
        return category;
    }
  };

  return (
    <Card className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className={getCategoryColor(project.category)}>
            {getCategoryLabel(project.category)}
          </Badge>
        </div>
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
              ⭐ Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Project Content */}
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 line-clamp-1">
          {project.title}
        </h3>
        
        <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-blue-50 text-blue-700 border-blue-200 text-xs"
            >
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge
              variant="secondary"
              className="bg-slate-100 text-slate-600 border-slate-200 text-xs"
            >
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href={`/projects/${project.id}`} className="flex-1">
            <Button variant="outline" className="w-full text-sm">
              <Eye className="mr-2 h-3 w-3" />
              View Details
            </Button>
          </Link>
          
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                <Play className="mr-2 h-3 w-3" />
                Demo
              </Button>
            </a>
          )}
          
          {!project.demoUrl && project.githubUrl && (
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-slate-800 hover:bg-slate-900 text-sm">
                <Github className="mr-2 h-3 w-3" />
                Code
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
