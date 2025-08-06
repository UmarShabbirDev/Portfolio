import { Project, Contact } from "@shared/schema";

// Static project data - replace with your actual project information
export const staticProjects: Project[] = [
  {
    id: 1,
    title: "AnchorPoint AR",
    description: "Unity-based system that scans spatial meshes and anchors virtual objects to real world positions with persistent placement across sessions using AR Foundation, ARKit/ARCore, and XR Toolkit.",
    category: "ar-vr",
    technologies: ["Unity3D", "ARKit", "ARCore", "AR Foundation", "XR Toolkit", "C#"],
    thumbnail: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoUrl: "#",
    githubUrl: "https://github.com/UmarShabbirDev/AnchorPoint-AR",
    keyfeatures:  ['Detects real-world surfaces using ARKit (iOS) or ARCore (Android)','Allows users to place virtual objects anchored to detected surfaces','Saves anchor data and reloads it in future sessions'],
    featured: true,
  },
  {
    id: 2,
    title: "Dark Taverns",
    description: "Multiplayer fantasy game featuring ECS architecture, dynamic content loading with Addressables, and Photon networking integration with backend API integration.",
    category: "3d",
    technologies: ["Unity3D", "Photon", "ECS", "Multiplayer", "Firebase"],
    thumbnail: "/dark.jpg",
    videoUrl: "https://youtu.be/UVMhHOGvFRU",
    demoUrl: "https://build.darktaverns.com/",
    githubUrl: "#",
    keyfeatures:  ['Advanced technical implementation with moder','sdsdsd'],
    featured: true,
  },
  {
    id: 3,
    title: "Everdate - Let's Play: The Dating Game",
    description: "Interactive dating game with multiplayer functionality, Playfab backend integration, and asynchronous multiplayer session support with UI and gameplay systems.",
    category: "3d",
    technologies: ["Unity3D", "Networking", "Mirror", "Playfab"],
    thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://youtu.be/Gj93fS77cYU",
    demoUrl: "#",
    githubUrl: "#",
    keyfeatures:  ['Advanced technical implementation witsdsdsh moder','sdsdsd'],
    featured: true,
  },
  {
    id: 4,
    title: "Heart And Brain: Journey to Self",
    description: "Narrative-driven 2D puzzle game with expressive Spine animations, Addressables for efficient asset management, and WebGL deployment.",
    category: "2d",
    technologies: ["Unity2D", "C#", "Addressables", "Spine", "Animation", "WebGL"],
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://youtu.be/1y2quiAKOAY",
    demoUrl: "https://www.kickstarter.com/projects/theawkwardyeti/heart-and-brain-the-video-game",
    githubUrl: "#",
    keyfeatures:  ['Advanced technical implementation with moder','sdsdsd'],
    featured: false,
  },
  {
    id: 5,
    title: "Words - Connections Word Game",
    description: "Complete mobile word puzzle game with dynamic content loading, backend integration, in-app purchasing system, and full lifecycle management.",
    category: "2d",
    technologies: ["Unity2D", "Puzzle", "Backend", "In-App Purchasing", "Mobile Scripting"],
    thumbnail: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://youtu.be/Iqr3XIhSnUQ",
    demoUrl: "https://apps.apple.com/us/app/words-connections-word-game/id6465991134",
    githubUrl: "#",
    keyfeatures:  ['Advanced technical implementation with moder','sdsdsd'],
    featured: false,
  },
  {
    id: 6,
    title: "Solitaire",
    description: "Classic Klondike Solitaire with customizable themes, hints, undo, and smooth real-time gameplay. Built to provide a relaxing card experience with rich UI and performance optimization.",
    category: "2d",
    technologies: ["Unity2D", "C#", "Game UI/UX", "Mobile Optimization", "App Store Deployment"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    videoUrl: "https://youtu.be/Iqr3XIhSnUQ", // Replace with gameplay trailer if available
    demoUrl: "https://apps.apple.com/us/app/solitaire/id1605913010",
    githubUrl: "#", // Set to repo if available, or leave as "#"
    keyfeatures:  ['Advanced technical implementation with moder','sdsdsd'],
    featured: true
  },

  {
    id: 7,
    title: "Solitaire Up",
    description: "Embark on a world tour with Klondike Solitaire in this level-based game featuring over 125 levels, daily events, power-ups, offline play, and beautifully designed card themes.",
    category: "2d",
    technologies: ["Unity2D", "C#", "Level Progression System", "Mobile Optimization", "App Store Deployment"],
    thumbnail: "https://images.unsplash.com/photo-1598550880865-34efcb0d1788?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500", // Replace with actual screenshot if preferred
    videoUrl: "https://youtu.be/Iqr3XIhSnUQ", // Replace with real gameplay trailer
    demoUrl: "https://apps.apple.com/us/app/solitaire-up-classic-card-game/id6447605857",
    githubUrl: "#", // No public repo found
    keyfeatures:  ['Advanced technical implementation with moder','sdsdsd'],
    featured: true
  },

];

// Static helper functions
export const getProjects = (): Project[] => staticProjects;

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return staticProjects;
  return staticProjects.filter(project => project.category === category);
};

export const getProject = (id: number): Project | undefined => {
  return staticProjects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return staticProjects.filter(project => project.featured);
};

// Contact form handler for static site
export const submitContactForm = async (data: any): Promise<{ success: boolean; message: string }> => {
  // For static sites, you can integrate with services like:
  // - Netlify Forms
  // - Formspree
  // - EmailJS
  // - Getform
  
  // Example with EmailJS (you'll need to add EmailJS to dependencies)
  console.log("Contact form data:", data);
  
  // For now, return success (you can replace with actual form service)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Thank you for your message! I'll get back to you soon."
      });
    }, 1000);
  });
};