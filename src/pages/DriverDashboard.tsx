import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapView } from "@/components/MapView";
import {
  Navigation,
  Users,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DriverDashboard = () => {
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
                    <Navigation className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Route Status</p>
                    <p className="text-lg font-semibold">In Progress</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Students</p>
                    <p className="text-lg font-semibold">12/15</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">ETA</p>
                    <p className="text-lg font-semibold">15 mins</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 glass-card hover-scale">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Next Stop</p>
                    <p className="text-lg font-semibold">Stop #5</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Student Pickup Status</h2>
                </div>
                <Card className="glass-card p-4">
                  <div className="space-y-4">
                    {[
                      { name: "John Doe", status: "Picked Up", stop: "Stop #1" },
                      { name: "Jane Smith", status: "Waiting", stop: "Stop #5" },
                      { name: "Bob Johnson", status: "Picked Up", stop: "Stop #2" },
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {student.status === "Picked Up" ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-gray-400" />
                          )}
                          <span>{student.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{student.stop}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>

              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Route Navigation</h2>
                  <Button variant="outline" size="sm">Start Route</Button>
                </div>
                <MapView routes={[]} />
              </section>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DriverDashboard;
