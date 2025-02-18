
import { Rocket, Book, Globe, Code, Users, School } from "lucide-react";

export default function FuturePlans() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Future Plans</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Global Expansion",
              description: "Expanding our presence across multiple countries to provide quality education worldwide.",
              timeline: "2024-2025"
            },
            {
              icon: Code,
              title: "Technology Integration",
              description: "Implementing cutting-edge educational technology and digital learning platforms.",
              timeline: "2024-2026"
            },
            {
              icon: Users,
              title: "Community Engagement",
              description: "Building stronger partnerships with local communities and educational institutions.",
              timeline: "2024-2027"
            },
            {
              icon: School,
              title: "New Campuses",
              description: "Opening state-of-the-art campuses in strategic locations worldwide.",
              timeline: "2025-2027"
            },
            {
              icon: Book,
              title: "Curriculum Enhancement",
              description: "Developing innovative curricula that combine traditional and modern learning approaches.",
              timeline: "2024-2026"
            },
            {
              icon: Rocket,
              title: "Research & Development",
              description: "Establishing research centers for educational innovation and development.",
              timeline: "2025-2028"
            }
          ].map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-8 hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <span className="text-sm font-medium text-primary">{plan.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
