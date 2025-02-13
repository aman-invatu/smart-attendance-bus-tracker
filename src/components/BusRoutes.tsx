
import { Card } from "@/components/ui/card";
import { BusRoute } from "@/types";
import { Bus, Navigation } from "lucide-react";

interface BusRoutesProps {
  routes: BusRoute[];
}

export const BusRoutes = ({ routes }: BusRoutesProps) => {
  return (
    <div className="card-transition">
      <h2 className="text-lg font-semibold mb-4">Active Bus Routes</h2>
      <Card className="glass-card">
        <div className="divide-y divide-gray-100">
          {routes.map((route) => (
            <div
              key={route.id}
              className="p-4 hover:bg-gray-50/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Bus className="h-5 w-5 text-primary-600" />
                  <h3 className="font-medium">{route.name}</h3>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-primary-50 text-primary-700 rounded-full">
                  {route.status}
                </span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Navigation className="h-4 w-4" />
                <span>Driver: {route.driver.name}</span>
              </div>
              
              <div className="mt-2 text-sm text-gray-500">
                {route.students.length} students on board
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
