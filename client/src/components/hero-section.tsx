import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight, Mail, Rocket } from "lucide-react";

export default function HeroSection() {
  const techStack = [
    "Unity 3D",
    "C#",
    "AR/VR",
    "Python",
    "AI/ML",
  ];

  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Umar Shabbir
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-slate-600 mb-6 font-medium">
                Game Developer & AI Engineer
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Software Engineer pursuing Master's in Artificial Intelligence, with 3+ years 
                of hands-on experience in Unity development, gameplay programming, multiplayer 
                systems, and XR technologies including VR, AR, and MR.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl">
                  <Rocket className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </Link>
            </div>
            
            {/* Tech Stack */}
            <div>
              <p className="text-sm text-slate-500 mb-3 font-medium">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <Badge 
                    key={tech}
                    variant="secondary" 
                    className="bg-white text-slate-700 border-slate-200 font-medium hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/profile-photo.jpg"
                  alt="Umar Shabbir - Game Developer & AI Engineer"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg animate-bounce">
                <div className="text-2xl font-bold">U</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl">🎮</div>
              </div>
              <div className="absolute top-1/2 -right-6 bg-purple-600 text-white p-3 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="text-2xl">🥽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
