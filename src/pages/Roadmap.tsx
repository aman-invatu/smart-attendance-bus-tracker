
import { ArrowRight } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Our Roadmap</h1>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {[
              {
                year: "2024",
                title: "Foundation Phase",
                description: "Establishing core infrastructure and initial school bus tracking system implementation.",
                milestones: [
                  "Launch of basic tracking system",
                  "Parent app development",
                  "Driver training programs",
                  "Initial security protocols"
                ]
              },
              {
                year: "2025",
                title: "Expansion Phase",
                description: "Scaling our services and enhancing feature set.",
                milestones: [
                  "Advanced analytics implementation",
                  "Real-time communication system",
                  "Integration with school management systems",
                  "Enhanced security features"
                ]
              },
              {
                year: "2026",
                title: "Innovation Phase",
                description: "Introducing cutting-edge technologies and expanding reach.",
                milestones: [
                  "AI-powered route optimization",
                  "Predictive maintenance system",
                  "Cross-platform integration",
                  "International expansion"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="relative flex gap-8 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-32 text-lg font-bold text-primary">{phase.year}</div>
                <div className="flex-1 pb-12 border-l-2 border-primary pl-8">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-semibold mb-4">{phase.title}</h3>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{milestone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
