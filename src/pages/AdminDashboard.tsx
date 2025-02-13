
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Settings,
  UserPlus,
  Shield,
  Bus,
  Plus,
} from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-6 glass-card hover-scale">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-primary-50 rounded-lg">
                <Settings className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold">RFID Settings</h3>
              <p className="text-sm text-gray-500">Configure RFID readers and tags</p>
              <Button variant="outline" className="w-full">Configure</Button>
            </div>
          </Card>

          <Card className="p-6 glass-card hover-scale">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <UserPlus className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Student Management</h3>
              <p className="text-sm text-gray-500">Add or modify student records</p>
              <Button variant="outline" className="w-full">Manage</Button>
            </div>
          </Card>

          <Card className="p-6 glass-card hover-scale">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-purple-50 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Access Control</h3>
              <p className="text-sm text-gray-500">Manage user roles and permissions</p>
              <Button variant="outline" className="w-full">Configure</Button>
            </div>
          </Card>

          <Card className="p-6 glass-card hover-scale">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-3 bg-yellow-50 rounded-lg">
                <Bus className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Route Management</h3>
              <p className="text-sm text-gray-500">Configure bus routes and drivers</p>
              <Button variant="outline" className="w-full">Manage</Button>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Activity</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <Card className="glass-card p-4">
              <div className="space-y-4">
                {[
                  { action: "New student added", time: "2 minutes ago" },
                  { action: "RFID reader configured", time: "1 hour ago" },
                  { action: "Bus route modified", time: "2 hours ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span>{activity.action}</span>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Quick Actions</h2>
            </div>
            <Card className="glass-card p-4">
              <div className="grid grid-cols-1 gap-4">
                <Button className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Add New Student
                </Button>
                <Button className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Create Bus Route
                </Button>
                <Button className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" /> Add RFID Reader
                </Button>
              </div>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
