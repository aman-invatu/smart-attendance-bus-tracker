
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <SidebarTrigger>
              <div className="flex flex-col space-y-1.5 hover:text-primary transition-all group">
                <div className="w-6 h-0.5 bg-current transform transition-all group-hover:translate-y-0.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current transform transition-all group-hover:-translate-y-0.5"></div>
              </div>
            </SidebarTrigger>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1a2236] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ST</span>
                </div>
                <h1 className="text-xl font-semibold text-gray-900">SmartTrack</h1>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
