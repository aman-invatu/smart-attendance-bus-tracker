
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { BusRoute } from "@/types";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapViewProps {
  routes: BusRoute[];
}

const DUMMY_BUS_LOCATION = {
  lat: 40.7128,
  lng: -74.0060
};

export const MapView = ({ routes }: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  // This would typically come from your backend
  const updateBusLocation = () => {
    // Simulate bus movement by adding small random changes to coordinates
    DUMMY_BUS_LOCATION.lat += (Math.random() - 0.5) * 0.001;
    DUMMY_BUS_LOCATION.lng += (Math.random() - 0.5) * 0.001;
    
    if (marker.current) {
      marker.current.setLngLat([DUMMY_BUS_LOCATION.lng, DUMMY_BUS_LOCATION.lat]);
    }
  };

  useEffect(() => {
    if (!mapRef.current) return;

    // Temporary input field for Mapbox token
    if (!mapboxToken) {
      const token = prompt('Please enter your Mapbox public token (you can get one from mapbox.com):');
      if (token) {
        setMapboxToken(token);
      }
      return;
    }

    mapboxgl.accessToken = mapboxToken;

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [DUMMY_BUS_LOCATION.lng, DUMMY_BUS_LOCATION.lat],
      zoom: 13
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add bus marker
    marker.current = new mapboxgl.Marker({ color: '#10B981' })
      .setLngLat([DUMMY_BUS_LOCATION.lng, DUMMY_BUS_LOCATION.lat])
      .addTo(map.current);

    // Simulate real-time updates
    const interval = setInterval(updateBusLocation, 2000);

    return () => {
      clearInterval(interval);
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken]);

  return (
    <div className="card-transition">
      <h2 className="text-lg font-semibold mb-4">Live Tracking</h2>
      <Card className="glass-card h-[400px] relative overflow-hidden">
        <div ref={mapRef} className="absolute inset-0">
          {!mapboxToken && (
            <div className="flex items-center justify-center h-full text-gray-500">
              Please enter your Mapbox token to view the map
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
