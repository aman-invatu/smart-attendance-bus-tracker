
export interface Student {
  id: string;
  name: string;
  rfidTag: string;
  class: string;
  busRoute: string;
  lastSeen?: Date;
  isPresent: boolean;
}

export interface BusRoute {
  id: string;
  name: string;
  driver: Driver;
  students: Student[];
  currentLocation?: {
    lat: number;
    lng: number;
  };
  status: 'active' | 'inactive' | 'completed';
}

export interface Driver {
  id: string;
  name: string;
  phone: string;
  route?: BusRoute;
  status: 'available' | 'on-route' | 'off-duty';
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  timestamp: Date;
  type: 'entry' | 'exit';
  location: 'school' | 'bus';
}
