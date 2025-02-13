
import { Card } from "@/components/ui/card";
import { Student } from "@/types";
import { UserCheck, UserX, Users } from "lucide-react";

interface AttendanceOverviewProps {
  students: Student[];
}

export const AttendanceOverview = ({ students }: AttendanceOverviewProps) => {
  const presentCount = students.filter(s => s.isPresent).length;
  const absentCount = students.length - presentCount;
  const attendanceRate = (presentCount / students.length) * 100;

  return (
    <div className="card-transition">
      <h2 className="text-lg font-semibold mb-4">Today's Attendance</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 glass-card hover-scale">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-primary-50 rounded-lg">
              <Users className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <p className="text-2xl font-semibold">{students.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 glass-card hover-scale">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <UserCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Present</p>
              <p className="text-2xl font-semibold">{presentCount}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 glass-card hover-scale">
          <div className="flex items-center space-x-4">
            <div className="p-2 bg-red-50 rounded-lg">
              <UserX className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Absent</p>
              <p className="text-2xl font-semibold">{absentCount}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
