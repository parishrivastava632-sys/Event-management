import Link from "next/link";
import { Mail, MapPin, Phone, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-heading font-bold text-primary tracking-wider mb-6 block">
              AURA
            </Link>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Crafting unforgettable premium experiences for your most important moments. We bring your vision to life with elegance and precision.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><MessageCircle size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Share2 size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Upcoming Events</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Corporate Events</li>
              <li>Wedding Planning</li>
              <li>Private Parties</li>
              <li>Gala Dinners</li>
              <li>Concert Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Elite Avenue, Luxury District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>hello@auraevents.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Aura Events. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
