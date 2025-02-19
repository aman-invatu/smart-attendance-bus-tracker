
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { MapView } from "@/components/MapView";
import { Bell, Calendar, CheckCircle, Clock, BookOpen, UserCheck, AlertTriangle, Users } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ParentDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container mx-auto px-4 py-12 mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Today's Status</p>
                    <p className="text-lg font-semibold">Present</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Arrival Time</p>
                    <p className="text-lg font-semibold">8:30 AM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Attendance Rate</p>
                    <p className="text-lg font-semibold">98%</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Bell className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Bus Status</p>
                    <p className="text-lg font-semibold">On Route</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="col-span-1 p-6 glass-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Academic Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Mathematics</span>
                    <span className="font-semibold">A+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Science</span>
                    <span className="font-semibold">A</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">English</span>
                    <span className="font-semibold">A-</span>
                  </div>
                </div>
              </Card>

              <Card className="col-span-1 p-6 glass-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Class Activities
                </h3>
                <div className="space-y-4">
                  {[
                    { activity: "Sports Day", date: "Next Friday" },
                    { activity: "Science Fair", date: "In 2 weeks" },
                    { activity: "Parent Meeting", date: "March 15" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{item.activity}</span>
                      <span className="text-sm font-medium">{item.date}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="col-span-1 p-6 glass-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Important Notices
                </h3>
                <div className="space-y-4">
                  {[
                    { notice: "Term Break", date: "April 1-15" },
                    { notice: "Fee Due Date", date: "March 31" },
                    { notice: "Annual Day", date: "March 25" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{item.notice}</span>
                      <span className="text-sm font-medium">{item.date}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                <Card className="glass-card p-4">
                  <div className="space-y-4">
                    {[
                      { time: "8:30 AM", event: "Arrived at school" },
                      { time: "3:30 PM", event: "Boarded bus" },
                      { time: "4:00 PM", event: "Reached home" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 text-sm text-gray-500">{activity.time}</div>
                        <div className="flex-1">{activity.event}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4">Bus Location</h2>
                <MapView routes={[]} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ParentDashboard;
