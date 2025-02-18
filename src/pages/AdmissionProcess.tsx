
import { Check } from "lucide-react";

export default function AdmissionProcess() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">Admission Process</h1>
        <div className="max-w-4xl mx-auto space-y-16">
          {[
            {
              step: 1,
              title: "Initial Application",
              description: "Begin your journey by submitting the online application form with basic information about the student and family.",
              requirements: [
                "Completed application form",
                "Birth certificate",
                "Previous academic records",
                "Passport size photographs"
              ]
            },
            {
              step: 2,
              title: "Document Verification",
              description: "Our team will verify all submitted documents and contact you for any additional information if needed.",
              requirements: [
                "Address proof",
                "Parent ID documents",
                "Transfer certificate (if applicable)",
                "Medical records"
              ]
            },
            {
              step: 3,
              title: "Assessment & Interview",
              description: "Students undergo age-appropriate assessments and parents participate in an interview with school administrators.",
              requirements: [
                "Student assessment",
                "Parent interview",
                "Previous school reports",
                "Special needs documentation (if applicable)"
              ]
            },
            {
              step: 4,
              title: "Admission Confirmation",
              description: "Upon successful completion of all steps, admission is confirmed through payment of fees and final documentation.",
              requirements: [
                "Admission fee payment",
                "Signed agreement",
                "Transportation form",
                "Emergency contact information"
              ]
            }
          ].map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-xl">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
