
import { useEffect, useState } from "react";
import { MapView } from "@/components/MapView";
import { AttendanceOverview } from "@/components/AttendanceOverview";
import { StudentList } from "@/components/StudentList";
import { BusRoutes } from "@/components/BusRoutes";
import { Navbar } from "@/components/Navbar";
import { type Student, type BusRoute } from "@/types";

const MOCK_STUDENTS: Student[] = [
  {
    id: "1",
    name: "John Doe",
    rfidTag: "RF001",
    class: "10A",
    busRoute: "Route 1",
    lastSeen: new Date(),
    isPresent: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    rfidTag: "RF002",
    class: "10B",
    busRoute: "Route 2",
    lastSeen: new Date(),
    isPresent: false,
  },
];

const MOCK_ROUTES: BusRoute[] = [
  {
    id: "1",
    name: "Route 1",
    driver: {
      id: "D1",
      name: "David Wilson",
      phone: "+1234567890",
      status: "on-route",
    },
    students: [MOCK_STUDENTS[0]],
    currentLocation: { lat: 40.7128, lng: -74.0060 },
    status: "active",
  },
];

const Index = () => {
  const [students] = useState<Student[]>(MOCK_STUDENTS);
  const [routes] = useState<BusRoute[]>(MOCK_ROUTES);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-6">
            <AttendanceOverview students={students} />
            <StudentList students={students} />
          </section>
          <section className="space-y-6">
            <MapView routes={routes} />
            <BusRoutes routes={routes} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
