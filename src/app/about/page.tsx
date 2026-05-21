"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            About <span className="text-primary italic">Aura</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We are a team of passionate creators, dedicated to transforming your vision into unforgettable experiences.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-heading mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">Founded with a vision to redefine luxury event management, Aura Events has grown into a premier agency known for its meticulous attention to detail and innovative designs.</p>
            <p className="text-muted-foreground mb-8">From intimate weddings to grand corporate galas, we believe every event should tell a unique story.</p>
            <Button variant="outline">Meet the Team</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative h-[400px] rounded-2xl overflow-hidden bg-muted">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Event Planning" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
