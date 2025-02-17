import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail, Globe, MapPin, ArrowUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [counters, setCounters] = useState({
    schools: 0,
    routes: 0,
    students: 0
  });

  const targetCounters = {
    schools: 50,
    routes: 1000,
    students: 10000
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 2000; // 2 seconds
            const steps = 50;
            const interval = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              const progress = currentStep / steps;
              
              setCounters({
                schools: Math.round(targetCounters.schools * progress),
                routes: Math.round(targetCounters.routes * progress),
                students: Math.round(targetCounters.students * progress)
              });

              if (currentStep === steps) clearInterval(timer);
            }, interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('counter-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-white border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/lovable-uploads/3a7b3290-4432-4467-9f5c-ae04bc291bc7.png" alt="Smart Tracker" className="h-10" />
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
              <a href="#about" className="text-gray-600 hover:text-primary">About</a>
              <a href="#gallery" className="text-gray-600 hover:text-primary">Gallery</a>
              <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-r from-primary-50 to-primary-100 py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel 
              className="w-full h-[600px] mb-8"
              opts={{
                align: "start",
                loop: true,
                duration: 1000,
                autoplay: true,
                interval: 1000,
              }}
            >
              <CarouselContent>
                {[
                  "/lovable-uploads/5a89f66b-7d4e-474a-b46c-1548c3f06118.png",
                  "/lovable-uploads/95858b67-3347-4da0-a22c-0d23be5cc910.png",
                  "/lovable-uploads/a264bd5e-a569-4315-b983-f1742fb79188.png",
                  "/lovable-uploads/d5ec4bea-485a-437f-a9bf-3aa562207891.png",
                  "/lovable-uploads/f3f91f39-14e4-47c7-a830-e5472173a25b.png"
                ].map((src, index) => (
                  <CarouselItem key={index}>
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-[600px] object-cover rounded-lg animate-fade-in" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-center relative z-10 animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">Smart School Bus Tracking Solution</h1>
              <p className="text-xl text-gray-600 mb-8">
                Keep your children safe with real-time bus tracking, attendance monitoring, and instant notifications.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" className="animate-scale-in">Get Started</Button>
                </Link>
                <Button variant="outline" size="lg" className="animate-scale-in">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Rotating Animations */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/lovable-uploads/83b7ab4e-0392-432a-9487-774c1eb04007.png",
                title: "For Parents",
                features: [
                  "Real-time bus location tracking",
                  "Instant notifications for pickup/drop-off",
                  "Attendance monitoring",
                  "Route updates and changes",
                  "Emergency alerts",
                  "Direct communication with drivers"
                ]
              },
              {
                image: "/lovable-uploads/988058e8-0a66-4bac-81da-a6326f32ea8a.png",
                title: "For Teachers",
                features: [
                  "Student attendance management",
                  "Bus schedule monitoring",
                  "Communication with drivers",
                  "Emergency notifications",
                  "Class management tools",
                  "Performance tracking"
                ]
              },
              {
                image: "/lovable-uploads/6ec8df80-5e28-451c-8773-df618efd1a39.png",
                title: "For Drivers",
                features: [
                  "Optimized route navigation",
                  "Digital attendance taking",
                  "Emergency alert system",
                  "Parent communication channel",
                  "Real-time traffic updates",
                  "Vehicle maintenance tracking"
                ]
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 border rounded-lg hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in group h-[600px]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-64 h-64 mb-6 group-hover:rotate-360 transition-transform duration-1000">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section with Enhanced Animations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Roadmap</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-4 animate-slide-in-right">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Launch & Initial Development</h3>
                  <p className="text-gray-600">Basic tracking and attendance features</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-slide-in-right delay-100">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Enhanced Features</h3>
                  <p className="text-gray-600">Real-time notifications and route optimization</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-slide-in-right delay-200">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div className="flex-1 p-6 bg-white rounded-lg shadow-md">
                  <h3 className="font-semibold mb-2">Mobile App Launch</h3>
                  <p className="text-gray-600">Dedicated apps for parents and drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Counter Animation */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in">About Our System</h2>
            <p className="text-gray-600 mb-8 animate-fade-in">
              Our smart bus tracking system provides a comprehensive solution for schools to manage their transportation system efficiently. 
              With real-time tracking, automated attendance, and instant notifications, we ensure the safety and reliability of school bus operations.
            </p>
            <div id="counter-section" className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-scale-in">
                <h3 className="text-4xl font-bold text-primary mb-2">{counters.schools}+</h3>
                <p className="text-gray-600">Schools</p>
              </div>
              <div className="animate-scale-in delay-100">
                <h3 className="text-4xl font-bold text-primary mb-2">{counters.routes}+</h3>
                <p className="text-gray-600">Daily Routes</p>
              </div>
              <div className="animate-scale-in delay-200">
                <h3 className="text-4xl font-bold text-primary mb-2">{counters.students}+</h3>
                <p className="text-gray-600">Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Navigation */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Gallery</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                "/lovable-uploads/5a89f66b-7d4e-474a-b46c-1548c3f06118.png",
                "/lovable-uploads/95858b67-3347-4da0-a22c-0d23be5cc910.png",
                "/lovable-uploads/a264bd5e-a569-4315-b983-f1742fb79188.png",
                "/lovable-uploads/d5ec4bea-485a-437f-a9bf-3aa562207891.png"
              ].map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <img 
                      src={src} 
                      alt={`Gallery ${index + 1}`} 
                      className="rounded-lg hover:opacity-75 transition-opacity w-full h-[400px] object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@smarttracker.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-primary" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Education Street, School District, ST 12345</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold mb-4">Social Media</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <Globe className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Updated Year */}
      <footer className="bg-[#1a2236] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/lovable-uploads/3a7b3290-4432-4467-9f5c-ae04bc291bc7.png" alt="Smart Tracker" className="h-10 mb-4" />
              <p className="text-gray-400">
                Making school transportation safer and more efficient.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white">Features</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded bg-white/10 text-white placeholder:text-gray-400 flex-1"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Smart Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 animate-fade-in"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
