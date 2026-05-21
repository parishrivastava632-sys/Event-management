"use client"
import { useAuth } from "@/context/AuthContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Users, Calendar, DollarSign, Activity } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/");
    }
  }, [user, router]);

  if (!user || user.role !== "admin") return null;

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 min-h-[60vh]">
      {/* Sidebar */}
      <div className="w-full md:w-64 space-y-2 shrink-0">
        <h2 className="text-xl font-bold font-heading mb-6 px-4">Admin Panel</h2>
        <Button variant={activeTab === "overview" ? "primary" : "ghost"} className="w-full justify-start" onClick={() => setActiveTab("overview")}>Overview</Button>
        <Button variant={activeTab === "events" ? "primary" : "ghost"} className="w-full justify-start" onClick={() => setActiveTab("events")}>Manage Events</Button>
        <Button variant={activeTab === "users" ? "primary" : "ghost"} className="w-full justify-start" onClick={() => setActiveTab("users")}>Users & Bookings</Button>
        <Button variant={activeTab === "settings" ? "primary" : "ghost"} className="w-full justify-start" onClick={() => setActiveTab("settings")}>Settings</Button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-secondary/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-2xl font-bold mt-1">$45,231</p>
                    </div>
                    <div className="bg-primary/20 p-3 rounded-full text-primary"><DollarSign size={20}/></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Events</p>
                      <p className="text-2xl font-bold mt-1">12</p>
                    </div>
                    <div className="bg-primary/20 p-3 rounded-full text-primary"><Calendar size={20}/></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Users</p>
                      <p className="text-2xl font-bold mt-1">1,204</p>
                    </div>
                    <div className="bg-primary/20 p-3 rounded-full text-primary"><Users size={20}/></div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/10">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Bookings</p>
                      <p className="text-2xl font-bold mt-1">342</p>
                    </div>
                    <div className="bg-primary/20 p-3 rounded-full text-primary"><Activity size={20}/></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Manage Events</h1>
              <Button variant="primary">Create New Event</Button>
            </div>
            <Card className="bg-secondary/10">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="border-b border-border bg-muted/50">
                      <tr>
                        <th className="p-4 font-medium text-sm text-muted-foreground">Event Name</th>
                        <th className="p-4 font-medium text-sm text-muted-foreground">Date</th>
                        <th className="p-4 font-medium text-sm text-muted-foreground">Status</th>
                        <th className="p-4 font-medium text-sm text-muted-foreground text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">The Golden Era Gala</td>
                        <td className="p-4 text-muted-foreground">Oct 24, 2026</td>
                        <td className="p-4"><span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs">Published</span></td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Tech Innovators Summit</td>
                        <td className="p-4 text-muted-foreground">Nov 12, 2026</td>
                        <td className="p-4"><span className="bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs">Draft</span></td>
                        <td className="p-4 text-right">
                          <Button variant="ghost" size="sm">Edit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {(activeTab === "users" || activeTab === "settings") && (
          <div className="py-20 text-center text-muted-foreground border border-dashed border-border rounded-xl">
            This module is simulated for the current mock flow.
          </div>
        )}
      </div>
    </div>
  );
}
