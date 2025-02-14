
import { Home, UserCircle, School, Shield, Bus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    url: "/",
  },
  {
    title: "Parent Dashboard",
    icon: UserCircle,
    url: "/parent",
  },
  {
    title: "Teacher Dashboard",
    icon: School,
    url: "/teacher",
  },
  {
    title: "Admin Dashboard",
    icon: Shield,
    url: "/admin",
  },
  {
    title: "Driver Dashboard",
    icon: Bus,
    url: "/driver",
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/50 bg-[#1a2236] backdrop-blur supports-[backdrop-filter]:bg-[#1a2236]/95">
      <SidebarContent className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-[#1a2236] font-bold text-xl">ST</span>
            </div>
            <span className="text-white font-bold text-lg">SmartTrack</span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 py-6">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.url}
                      tooltip={item.title}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <Link 
                        to={item.url} 
                        className={`flex items-center gap-3 ${
                          location.pathname === item.url 
                            ? 'text-white' 
                            : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
