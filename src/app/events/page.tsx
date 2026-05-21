"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    { title: "The Golden Era Gala", date: "Oct 24, 2026", location: "Grand Plaza, NY", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87" },
    { title: "Tech Innovators Summit", date: "Nov 12, 2026", location: "Silicon Center, CA", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678" },
    { title: "Winter Wonderland Ball", date: "Dec 18, 2026", location: "Ice Palace, Aspen", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-32 pb-10 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Upcoming <span className="text-primary italic">Events</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Join us at our upcoming signature experiences.</p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group rounded-2xl overflow-hidden bg-secondary/10 border border-border">
              <div className="aspect-[4/3] w-full relative overflow-hidden">
                <img src={`${event.img}?q=80&w=800&auto=format&fit=crop`} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-3">{event.title}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2"><Calendar size={16} className="text-primary"/> {event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> {event.location}</span>
                </div>
                <Link href={`/events/${i+1}`}>
                  <Button variant="primary" className="w-full">Register Now</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
