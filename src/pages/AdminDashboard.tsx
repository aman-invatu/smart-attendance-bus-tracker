
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { School, Users, Bus, UserCheck, BarChart, Calendar, AlertTriangle, Search } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container mx-auto px-4 py-8 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <School className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Schools</p>
                    <p className="text-2xl font-semibold">12</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-2xl font-semibold">1,234</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Bus className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Active Buses</p>
                    <p className="text-2xl font-semibold">48</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <UserCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Active Staff</p>
                    <p className="text-2xl font-semibold">156</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 glass-card hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Recent Activities</h3>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
                <div className="space-y-4">
                  {[
                    { text: "New student registration", time: "2 hours ago" },
                    { text: "Bus route updated", time: "4 hours ago" },
                    { text: "Staff meeting scheduled", time: "5 hours ago" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{activity.text}</span>
                      <span className="text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass-card hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Quick Stats</h3>
                  <BarChart className="h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Attendance Rate</span>
                    <span className="font-semibold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bus Utilization</span>
                    <span className="font-semibold">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Staff Present</span>
                    <span className="font-semibold">92%</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-card hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Upcoming Events</h3>
                  <Calendar className="h-5 w-5 text-gray-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { event: "Parent-Teacher Meeting", date: "Next Monday" },
                    { event: "Sports Day", date: "Next Friday" },
                    { event: "Annual Day", date: "In 2 weeks" },
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{event.event}</span>
                      <span className="text-gray-500">{event.date}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 glass-card hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">System Alerts</h3>
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { message: "System maintenance scheduled", priority: "High" },
                    { message: "Update available", priority: "Medium" },
                    { message: "Backup recommended", priority: "Low" },
                  ].map((alert, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span>{alert.message}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.priority === "High" ? "bg-red-100 text-red-700" :
                        alert.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {alert.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass-card hover-scale">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="w-full">Add Student</Button>
                  <Button variant="outline" className="w-full">Add Staff</Button>
                  <Button variant="outline" className="w-full">Bus Routes</Button>
                  <Button variant="outline" className="w-full">Reports</Button>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
