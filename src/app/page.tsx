"use client"
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Calendar, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background z-10" />
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Crafting <span className="text-primary italic">Unforgettable</span> <br /> Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            From intimate gatherings to grand galas, Aura Events brings your vision to life with unparalleled elegance and precision.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="primary" size="lg" className="rounded-full text-md h-12 px-8">
              Book Your Event
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-md h-12 px-8">
              Explore Portfolio
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We offer comprehensive event management solutions tailored to your unique needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Weddings", icon: Users, desc: "Curating magical moments for your special day with meticulous attention to detail." },
            { title: "Corporate Events", icon: Calendar, desc: "Professional and impactful events that elevate your brand and engage your audience." },
            { title: "Gala Dinners", icon: Star, desc: "Luxurious evenings designed to impress, featuring exquisite styling and entertainment." }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-secondary/10 hover:bg-secondary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.desc}</p>
                  <Link href="/services" className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-medium hover:underline">
                    Learn more <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Events */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">Featured Events</h2>
              <p className="text-muted-foreground">Discover our upcoming signature experiences.</p>
            </div>
            <Button variant="link" className="hidden md:flex">View all events <ArrowRight size={16} className="ml-2" /></Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] bg-muted w-full relative">
                  {/* Placeholder for event image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? '1540575467063-178a50c2df87' : '1492684223066-81342ee5ff30'}?q=80&w=2070&auto=format&fit=crop`}
                    alt="Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                  <div className="flex items-center gap-4 text-sm text-primary mb-3">
                    <span className="flex items-center gap-1"><Calendar size={14}/> Oct 24, 2026</span>
                    <span className="flex items-center gap-1"><MapPin size={14}/> Grand Plaza, NY</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mb-2">The Golden Era Gala</h3>
                  <p className="text-gray-300 line-clamp-2">An evening of timeless elegance celebrating the finest in art and culture.</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-8 md:hidden">View all events</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-secondary to-background border border-primary/20 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 relative z-10">Ready to create something extraordinary?</h2>
          <p className="text-muted-foreground mb-8 text-lg relative z-10">Let's collaborate to make your next event an unforgettable experience.</p>
          <Button variant="primary" size="lg" className="rounded-full px-10 relative z-10">
            Start Planning
          </Button>
        </div>
      </section>
    </div>
  );
}
