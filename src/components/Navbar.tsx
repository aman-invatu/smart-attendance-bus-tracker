
import { Bell, User, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2236] border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <SidebarTrigger>
              <div className="flex flex-col space-y-1.5 hover:text-white text-gray-400 transition-all group">
                <div className="w-6 h-0.5 bg-current transform transition-all group-hover:translate-y-0.5"></div>
                <div className="w-6 h-0.5 bg-current"></div>
                <div className="w-6 h-0.5 bg-current transform transition-all group-hover:-translate-y-0.5"></div>
              </div>
            </SidebarTrigger>
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/3a7b3290-4432-4467-9f5c-ae04bc291bc7.png" alt="Smart Tracker" className="h-8" />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="icon" className="relative text-gray-400 hover:text-white hover:bg-white/10">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/login')}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
