import { projects, contacts, users, type Project, type Contact, type User, type InsertProject, type InsertContact, type InsertUser } from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private contacts: Map<number, Contact>;
  private currentUserId: number;
  private currentProjectId: number;
  private currentContactId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.contacts = new Map();
    this.currentUserId = 1;
    this.currentProjectId = 1;
    this.currentContactId = 1;
    
    // Initialize with Umar's projects from his CV
    this.initializeProjects();
  }

  private initializeProjects() {
    const initialProjects: InsertProject[] = [
      {
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
      {
        title: "Everdate - Let's Play: The Dating Game",
        description: "Interactive dating game with multiplayer functionality, Playfab backend integration, and asynchronous multiplayer session support with UI and gameplay systems.",
        category: "3d",
        technologies: ["Unity3D", "Networking", "Mirror", "Playfab"],
        thumbnail: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        title: "Heart And Brain: Journey to Self",
        description: "Narrative-driven 2D puzzle game with expressive Spine animations, Addressables for efficient asset management, and WebGL deployment.",
        category: "2d",
        technologies: ["Unity2D", "C#", "Addressables", "Spine", "Animation", "WebGL"],
        thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        title: "Words - Connections Word Game",
        description: "Complete mobile word puzzle game with dynamic content loading, backend integration, in-app purchasing system, and full lifecycle management.",
        category: "2d",
        technologies: ["Unity2D", "Puzzle", "Backend", "In-App Purchasing", "Mobile Scripting"],
        thumbnail: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        demoUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        title: "AI-Powered NPCs",
        description: "PyTorch trained AI models deployed in Unity for real-time NPC behavior adaptation with scalable ML pipelines for dynamic patrol paths and combat strategy.",
        category: "3d",
        technologies: ["Unity3D", "PyTorch", "AI/ML", "Python", "Real-time Systems"],
        thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        demoUrl: "#",
        githubUrl: "#",
        featured: true,
      },
    ];

    initialProjects.forEach(project => {
      this.createProject(project);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.category === category
    );
  }

  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(
      (project) => project.featured === true
    );
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = { 
      ...insertProject, 
      id,
      featured: insertProject.featured ?? false,
      videoUrl: insertProject.videoUrl ?? null,
      demoUrl: insertProject.demoUrl ?? null,
      githubUrl: insertProject.githubUrl ?? null
    };
    this.projects.set(id, project);
    return project;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
