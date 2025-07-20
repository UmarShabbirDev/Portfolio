import { useState } from "react";
import { Project } from "@shared/schema";
import ProjectCard from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectsByCategory } from "@/lib/static-data";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ar-vr", label: "AR/VR & WebGL" },
  { id: "3d", label: "3D Games" },
  { id: "2d", label: "2D Games" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const projects = getProjectsByCategory(activeCategory);
  const isLoading = false;

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive collection of my work in game development, AR/VR experiences, 
            and AI-powered applications. Each project represents a unique challenge and 
            innovative solution.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
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
        ) : projects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No projects found
            </h3>
            <p className="text-slate-600">
              No projects available in this category at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
