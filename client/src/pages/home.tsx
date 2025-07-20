import HeroSection from "@/components/hero-section";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Rocket } from "lucide-react";

export default function Home() {
  const { data: featuredProjects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects?featured=true"],
  });

  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A showcase of my work in game development, AR/VR experiences, and AI-powered applications
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-slate-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-slate-300 rounded mb-2"></div>
                    <div className="h-4 bg-slate-300 rounded mb-4"></div>
                    <div className="flex gap-2 mb-4">
                      <div className="h-6 w-16 bg-slate-300 rounded"></div>
                      <div className="h-6 w-20 bg-slate-300 rounded"></div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 h-10 bg-slate-300 rounded"></div>
                      <div className="flex-1 h-10 bg-slate-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Rocket className="mr-2 h-4 w-4" />
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
