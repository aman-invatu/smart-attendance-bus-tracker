
import { Card } from "@/components/ui/card";
import { Student } from "@/types";
import { CheckCircle, XCircle } from "lucide-react";

interface StudentListProps {
  students: Student[];
}

export const StudentList = ({ students }: StudentListProps) => {
  return (
    <div className="card-transition">
      <h2 className="text-lg font-semibold mb-4">Student Status</h2>
      <Card className="glass-card">
        <div className="divide-y divide-gray-100">
          {students.map((student) => (
            <div
              key={student.id}
              className="p-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
            >
              <div>
                <p className="font-medium">{student.name}</p>
                <p className="text-sm text-gray-500">
                  Class: {student.class} • Route: {student.busRoute}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {student.isPresent ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
