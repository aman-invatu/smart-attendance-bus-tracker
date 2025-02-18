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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
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

      <div className="pt-16">
        <section className="relative bg-[#1a2236] py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Carousel 
                className="w-full h-[600px] mb-8"
                opts={{
                  align: "start",
                  loop: true,
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
                <h1 className="text-5xl font-bold mb-6 text-white">Smart School Bus Tracking Solution</h1>
                <p className="text-xl text-gray-300 mb-8">
                  Keep your children safe with real-time bus tracking, attendance monitoring, and instant notifications.
                </p>
                <div className="flex justify-center gap-4">
                  <Link to="/register">
                    <Button size="lg" className="animate-scale-in">Get Started</Button>
                  </Link>
                  <Button variant="outline" size="lg" className="animate-scale-in text-white border-white hover:bg-white/10">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                  className="p-6 border rounded-lg hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 animate-fade-in group h-[600px] hover:rotate-360"
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

        <section id="gallery" className="py-20 bg-gradient-to-br from-[#1a2236] to-[#2a3246]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-white animate-fade-in">Gallery</h2>
            <div className="grid grid-cols-3 gap-8 perspective-1000">
              {[
                {
                  image: "/lovable-uploads/510db669-4e5d-44cf-b66d-e9f0cdcac59e.png",
                  title: "School Bus Tracking"
                },
                {
                  image: "/lovable-uploads/188e2a79-2218-4d37-a95f-a4c3f8fb14c6.png",
                  title: "Real-time Monitoring"
                },
                {
                  image: "/lovable-uploads/b0f77e6c-a934-4325-896c-c5e00e178728.png",
                  title: "Parent Dashboard"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="transform transition-all duration-500 hover:scale-105 hover:rotate-y-12"
                >
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-white text-center">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-[#1a2236] to-[#2a3246]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-gray-400"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button size="lg" variant="secondary">Send Message</Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#1a2236] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <img src="/lovable-uploads/3a7b3290-4432-4467-9f5c-ae04bc291bc7.png" alt="Smart Tracker" className="h-10 mb-4" />
                <p className="text-gray-400">Making school transportation safer and more efficient.</p>
                <div className="flex gap-4 mt-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                  <li><a href="#gallery" className="text-gray-400 hover:text-white">Gallery</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-lg">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    contact@smarttracker.com
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    +1 (555) 123-4567
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    123 School Street, City
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Smart Tracker. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-600 transition-all duration-300 animate-fade-in"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
