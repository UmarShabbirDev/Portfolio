import { Link } from "wouter";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Umar Shabbir</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Game Developer & AI Engineer passionate about creating immersive experiences 
              with cutting-edge technology. Specializing in Unity development, XR applications, 
              and AI-powered game mechanics.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 hover:bg-slate-600 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-700 hover:bg-blue-400 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="mailto:umarshabbir957@gmail.com" 
                className="w-10 h-10 bg-slate-700 hover:bg-red-500 text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-slate-300 hover:text-white transition-colors">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <span className="text-slate-300 hover:text-white transition-colors">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <span className="text-slate-300 hover:text-white transition-colors">Resume</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-slate-300 hover:text-white transition-colors">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Specialties */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Specialties</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Unity 3D Development</li>
              <li>AR/VR Applications</li>
              <li>AI Integration</li>
              <li>Multiplayer Systems</li>
              <li>Game Optimization</li>
              <li>Cross-platform Development</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Umar Shabbir. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ in Berlin</span>
              <span>•</span>
              <span>Available for freelance work</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
