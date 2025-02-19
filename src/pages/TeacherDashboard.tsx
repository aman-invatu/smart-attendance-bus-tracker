import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserCheck, UserX, Users, BarChart } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const TeacherDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container mx-auto px-4 py-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-2xl font-semibold">35</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <UserCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Present Today</p>
                    <p className="text-2xl font-semibold">32</p>
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
                    <p className="text-2xl font-semibold">3</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <BarChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Average Attendance</p>
                    <p className="text-2xl font-semibold">92%</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Class Attendance</h2>
                  <Button variant="outline">Mark Exception</Button>
                </div>
                <Card className="glass-card">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Student Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Arrival Time</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Alice Johnson", status: "Present", time: "8:30 AM" },
                        { name: "Bob Smith", status: "Absent", time: "-" },
                        { name: "Carol White", status: "Present", time: "8:45 AM" },
                      ].map((student, index) => (
                        <TableRow key={index}>
                          <TableCell>{student.name}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              student.status === "Present" 
                                ? "bg-green-50 text-green-700" 
                                : "bg-red-50 text-red-700"
                            }`}>
                              {student.status}
                            </span>
                          </TableCell>
                          <TableCell>{student.time}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm">Edit</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TeacherDashboard;
