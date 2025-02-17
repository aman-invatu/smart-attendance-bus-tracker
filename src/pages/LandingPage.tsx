
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Phone, Mail, Globe, MapPin } from "lucide-react";

export default function LandingPage() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Smart School Bus Tracking Solution</h1>
            <p className="text-xl text-gray-600 mb-8">
              Keep your children safe with real-time bus tracking, attendance monitoring, and instant notifications.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/register">
                <Button size="lg">Get Started</Button>
              </Link>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">For Parents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time bus location tracking</li>
                <li>• Instant notifications for pickup/drop-off</li>
                <li>• Attendance monitoring</li>
                <li>• Route updates and changes</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">For Teachers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Student attendance management</li>
                <li>• Bus schedule monitoring</li>
                <li>• Communication with drivers</li>
                <li>• Emergency notifications</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">For Drivers</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Optimized route navigation</li>
                <li>• Digital attendance taking</li>
                <li>• Emergency alert system</li>
                <li>• Parent communication channel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Our System</h2>
            <p className="text-gray-600 mb-8">
              Our smart bus tracking system provides a comprehensive solution for schools to manage their transportation system efficiently. 
              With real-time tracking, automated attendance, and instant notifications, we ensure the safety and reliability of school bus operations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-gray-600">Schools</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-gray-600">Daily Routes</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
                <p className="text-gray-600">Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Using placeholder images for demonstration */}
            <img src="https://images.unsplash.com/photo-1487252665478-49b61b47f302" alt="School Bus" className="rounded-lg hover:opacity-75 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2" alt="School" className="rounded-lg hover:opacity-75 transition-opacity" />
            <img src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" alt="Technology" className="rounded-lg hover:opacity-75 transition-opacity" />
          </div>
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

      {/* Footer */}
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
            <p>&copy; 2024 Smart Tracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
