
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
    <Sidebar className="border-r border-border/50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold text-lg px-2 py-4 text-primary">SmartTrack</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Link 
                      to={item.url} 
                      className={`flex items-center gap-3 ${
                        location.pathname === item.url 
                          ? 'text-primary' 
                          : 'text-gray-600 hover:text-primary'
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
      </SidebarContent>
    </Sidebar>
  );
}
