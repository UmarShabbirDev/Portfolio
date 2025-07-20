import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Mail, 
  Phone, 
  MapPin,
  Star
} from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    // For static sites, link directly to the PDF file
    window.open("/UmarShabbir_Resume.pdf", "_blank");
  };

  return (
    <div className="pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Resume
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Download my complete CV or view my professional background below
          </p>
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>

        {/* Resume Content */}
        <Card className="shadow-xl">
          <CardContent className="p-8">
            {/* Personal Info */}
            <div className="border-b border-slate-200 pb-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    Umar Shabbir
                  </h2>
                  <p className="text-xl text-slate-600 mb-4">
                    Software Engineer & AI Specialist
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      Berlin, Germany
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-1 h-4 w-4" />
                      +49 15560 699022
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-1 h-4 w-4" />
                      umarshabbir957@gmail.com
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Summary */}
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Professional Summary
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Software Engineer currently pursuing a Master's in Artificial Intelligence, with 3+ years 
                  of hands-on experience in Unity development, gameplay programming, multiplayer systems, 
                  AI-powered mechanics and XR technologies including Virtual Reality (VR), Augmented Reality (AR), 
                  and Mixed Reality (MR). Proficient in Unity, C#, and Unreal Engine with expertise in creating 
                  scalable, immersive, and optimized AR experiences.
                </p>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">Unity AI Programmer</h4>
                    <span className="text-sm text-slate-500">04/2024 – 09/2024</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Sparkix Technologies, Pakistan</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Developed and deployed PyTorch trained AI models in Unity for real time NPC behavior adaptation</li>
                    <li>• Built scalable ML pipelines capable of adapting patrol paths, combat strategy, with real-time performance</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">Game Programmer</h4>
                    <span className="text-sm text-slate-500">04/2023 – 03/2024</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Rift Games, Pakistan</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Developed XR apps in Unity with features like spatial mesh visualization and dynamic object placement</li>
                    <li>• Implemented live content updates using WebSocket communication and XML/JSON-driven configurations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">Unity Game Engineer</h4>
                    <span className="text-sm text-slate-500">01/2022 – 04/2023</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Game District, Pakistan</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Implemented multiplayer features with Photon fusion and Mirror</li>
                    <li>• Worked extensively with asset streaming, memory optimization, and animation pipelines</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">Junior Unity Developer</h4>
                    <span className="text-sm text-slate-500">07/2021 – 12/2021</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">Gamers Guild, Pakistan</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Developed cross-platform game mechanics and optimized player interactions using C# and OOP</li>
                    <li>• Participated in agile team meetings, contributing ideas for feature improvements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-blue-600" />
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">MSc Artificial Intelligence</h4>
                    <span className="text-sm text-slate-500">2024 – Present</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Brandenburgische Technische Universität, Germany
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-semibold text-slate-800">BS Computer Science</h4>
                    <span className="text-sm text-slate-500">2017 – 2021</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    University of Engineering and Technology, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <Code className="mr-2 h-5 w-5 text-blue-600" />
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">C#</Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">C++</Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">Python</Badge>
                  </div>
                  
                  <h4 className="font-medium text-slate-700 mb-3">Game Engines</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200">Unity 2D/3D</Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-200">Unreal Engine</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-slate-700 mb-3">XR Technologies</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">VR/AR/MR</Badge>
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">ARKit/ARCore</Badge>
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">OpenXR</Badge>
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">Vuforia</Badge>
                  </div>
                  
                  <h4 className="font-medium text-slate-700 mb-3">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Multiplayer Systems</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">AI Integration</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Optimization</Badge>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">Agile Development</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleDownload}
            size="lg"
            variant="outline"
            className="border-slate-300 hover:bg-slate-50"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Complete Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
