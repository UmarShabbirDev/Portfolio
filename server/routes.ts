import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Projects API routes
  app.get("/api/projects", async (req, res) => {
    try {
      const { category, featured } = req.query;
      
      let projects;
      if (category && category !== 'all') {
        projects = await storage.getProjectsByCategory(category as string);
      } else if (featured === 'true') {
        projects = await storage.getFeaturedProjects();
      } else {
        projects = await storage.getProjects();
      }
      
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.json({ message: "Message sent successfully", id: contact.id });
    } catch (error) {
      res.status(400).json({ message: "Invalid contact form data" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", (req, res) => {
    const resumePath = path.join(process.cwd(), "public", "UmarShabbir_Resume.pdf");
    res.download(resumePath, "UmarShabbir_Resume.pdf", (err) => {
      if (err) {
        res.status(404).json({ message: "Resume file not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
