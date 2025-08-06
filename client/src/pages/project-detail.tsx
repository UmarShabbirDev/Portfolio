import { useParams, Link } from "wouter";
import { Project } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  Calendar,
  Tag
} from "lucide-react";
import { getProject } from "@/lib/static-data";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  const project = getProject(parseInt(id || "0"));
  const isLoading = false;
  const error = !project;

  if (isLoading) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-300 rounded w-24 mb-8"></div>
            <div className="h-12 bg-slate-300 rounded w-3/4 mb-6"></div>
            <div className="h-96 bg-slate-300 rounded mb-8"></div>
            <div className="h-32 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-slate-600 mb-8">
            The project you're looking for doesn't exist or may have been removed.
          </p>
          <Link href="/projects">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
        return "AR/VR & WebGL";
      case "3d":
        return "3D Game";
      case "2d":
        return "2D Game";
      default:
        return category;
    }
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/projects">
          <Button variant="ghost" className="mb-8 -ml-4 hover:bg-slate-100">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge 
              variant="secondary" 
              className={getCategoryColor(project.category)}
            >
              <Tag className="mr-1 h-3 w-3" />
              {getCategoryLabel(project.category)}
            </Badge>
            {project.featured && (
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                ⭐ Featured
              </Badge>
            )}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Media */}
        <Card className="mb-8 overflow-hidden shadow-xl">
          <CardContent className="p-0">
            {project.videoUrl ? (
              <div className="aspect-video">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="h-16 w-16 text-white" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                  Project Overview
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <h4 className="text-lg font-semibold text-slate-800 mb-4">
                  Key Features
                </h4>
                <ul className="space-y-2 text-slate-600">
                  {project.keyfeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Project Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-blue-50 text-blue-700 border-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Links */}
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-4">
                  Project Links
                </h4>
                <div className="space-y-3">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Play className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full">
                        <Github className="mr-2 h-4 w-4" />
                        View Source
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">
            More Projects
          </h3>
          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
