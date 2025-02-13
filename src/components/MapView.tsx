
import { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { BusRoute } from "@/types";

interface MapViewProps {
  routes: BusRoute[];
}

export const MapView = ({ routes }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Map implementation will be added here when we integrate a mapping service
  }, [routes]);

  return (
    <div className="card-transition">
      <h2 className="text-lg font-semibold mb-4">Live Tracking</h2>
      <Card className="glass-card h-[300px] relative overflow-hidden">
        <div ref={mapRef} className="absolute inset-0">
          <div className="flex items-center justify-center h-full text-gray-500">
            Map view will be implemented with real-time tracking
          </div>
        </div>
      </Card>
    </div>
  );
};
