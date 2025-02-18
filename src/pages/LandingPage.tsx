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
              <a href="#gallery" className="text-gray-600 hover:text-primary">Gallery</a>
              <Link to="/roadmap" className="text-gray-600 hover:text-primary">Roadmap</Link>
              <Link to="/admission-process" className="text-gray-600 hover:text-primary">Admission</Link>
              <Link to="/future-plans" className="text-gray-600 hover:text-primary">Future Plans</Link>
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
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[
                  "/lovable-uploads/5f8b8bb9-d084-4787-bf80-1aa67090042d.png",
                  "/lovable-uploads/19351f74-94f9-4806-8536-1c5136d6b8e1.png",
                  "/lovable-uploads/722acf91-2316-4bc6-a1e3-25bfb02e6964.png",
                  "/lovable-uploads/cf4c7c87-1ad6-47f3-8806-8eb53dc9a83f.png",
                  "/lovable-uploads/ec2412fc-dc29-4b10-bff1-1c3f87e6724c.png",
                  "/lovable-uploads/e1834da6-7e6d-4a40-8b68-ee78678067ff.png",
                  "/lovable-uploads/6d908ffd-5c71-4376-b4ab-f0666efb4e5b.png",
                  "/lovable-uploads/044c49b6-9f67-4ccf-b450-156c8385eddf.png",
                  "/lovable-uploads/eae6c147-f69b-4fe2-a60e-80b5c20be302.png",
                  "/lovable-uploads/fe883106-a10e-49c5-81c0-7a57c8e8da0c.png",
                  "/lovable-uploads/0348ac36-3dab-4c08-90e6-5341007ddcc1.png",
                  "/lovable-uploads/9342ad9b-1b3c-4b0f-9b89-6e16db1f4d9b.png"
                ].map((src, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <img 
                        src={src} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg hover:opacity-75 transition-opacity"
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
