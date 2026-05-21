"use client"
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-24 pb-20">
      <section className="relative pt-32 pb-10 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6"
          >
            Get In <span className="text-primary italic">Touch</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We'd love to hear about your next event.</p>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold font-heading mb-6">Contact Information</h2>
            <p className="text-muted-foreground mb-8">Ready to create something extraordinary? Reach out to our team of expert planners to start designing your bespoke event experience today.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><MapPin /></div>
                <div>
                  <h4 className="font-semibold text-lg">Our Office</h4>
                  <p className="text-muted-foreground">123 Elite Avenue, Luxury District<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Phone /></div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567<br/>Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary"><Mail /></div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-muted-foreground">hello@auraevents.com<br/>We'll respond within 24 hours.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Card className="bg-secondary/10 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Mock message sent!"); }}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <input type="text" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Type</label>
                    <select className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Private Party</option>
                      <option>Gala / Concert</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea rows={4} className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us about your event..." />
                  </div>
                  <Button variant="primary" className="w-full" type="submit">Submit Request</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
