
export interface Student {
  id: string;
  name: string;
  rfidTag: string;
  class: string;
  busRoute: string;
  lastSeen: Date;
  isPresent: boolean;
}

export interface BusDriver {
  id: string;
  name: string;
  phone: string;
  status: 'on-route' | 'off-duty';
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface BusRoute {
  id: string;
  name: string;
  driver: BusDriver;
  students: Student[];
  currentLocation: Coordinates;
  status: 'active' | 'completed' | 'cancelled';
}
