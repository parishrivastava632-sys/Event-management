"use client"
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, login, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold text-primary tracking-wider">
          AURA
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link href="/events" className="text-sm font-medium hover:text-primary transition-colors">Events</Link>
          <Link href="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
          
          {user ? (
            <div className="flex items-center gap-4">
              {user.role === "admin" && <Link href="/admin" className="text-sm font-medium text-primary">Admin</Link>}
              {user.role === "user" && <Link href="/dashboard" className="text-sm font-medium text-primary">Dashboard</Link>}
              <Button variant="outline" onClick={logout} className="rounded-full">Logout</Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => login("user")}>User Login</Button>
              <Button variant="outline" onClick={() => login("admin")}>Admin Login</Button>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border py-4 px-4 flex flex-col gap-4">
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium">About</Link>
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium">Services</Link>
          <Link href="/events" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium">Events</Link>
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium">Portfolio</Link>
          {user ? (
            <div className="flex flex-col gap-2 mt-4">
              {user.role === "admin" && <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-primary">Admin</Link>}
              {user.role === "user" && <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-primary">Dashboard</Link>}
              <Button variant="outline" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full">Logout</Button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mt-4">
              <Button variant="outline" onClick={() => { login("user"); setIsMobileMenuOpen(false); }} className="w-full">User Login</Button>
              <Button variant="outline" onClick={() => { login("admin"); setIsMobileMenuOpen(false); }} className="w-full">Admin Login</Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
