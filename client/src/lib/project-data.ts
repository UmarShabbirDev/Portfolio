import { Project } from "@shared/schema";

// This file contains local project data that can be used for development
// In production, all data should come from the API

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: "AnchorPoint AR",
    description: "Unity-based system that scans spatial meshes and anchors virtual objects to real world positions with persistent placement across sessions using AR Foundation, ARKit/ARCore, and XR Toolkit.",
    category: "ar-vr",
    technologies: ["Unity3D", "ARKit", "ARCore", "Addressables", "XR Toolkit"],
    thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Dark Taverns",
    description: "Multiplayer fantasy game featuring ECS architecture, dynamic content loading with Addressables, and Photon networking integration with backend API integration.",
    category: "3d",
    technologies: ["Unity3D", "Photon", "ECS", "Multiplayer", "Firebase"],
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  // Add more projects as needed...
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ar-vr", label: "AR/VR & WebGL" },
  { id: "3d", label: "3D Games" },
  { id: "2d", label: "2D Games" },
];
