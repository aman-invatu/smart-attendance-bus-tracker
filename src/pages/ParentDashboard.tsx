import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { MapView } from "@/components/MapView";
import { Bell, Calendar, CheckCircle, Clock } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const ParentDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container mx-auto px-4 py-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
