
import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { School, Users, Bus, UserCheck } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <AppSidebar />
        <div className="flex-1">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
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
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
