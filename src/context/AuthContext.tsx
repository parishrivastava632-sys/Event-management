"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth, isConfigured } from "@/lib/firebase";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";

export type UserRole = "guest" | "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (role: UserRole) => void;
  logout: () => void;
  isMock: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  login: () => {},
  logout: () => {},
  isMock: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isConfigured && auth) {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          // Normally we would fetch the user's role from Firestore here.
          setUser({
            id: firebaseUser.uid,
            name: firebaseUser.displayName || "Firebase User",
            email: firebaseUser.email || "",
            role: "user", // Default fallback
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const login = (role: UserRole) => {
    if (isConfigured) {
      alert("Firebase is active but real Auth UI is pending. Please build a /login page using signInWithEmailAndPassword.");
    } else {
      console.warn("Using Mock Login (Firebase keys missing in .env.local)");
      setUser({
        id: `mock-${role}-123`,
        name: role === "admin" ? "Admin User" : "John Doe",
        email: role === "admin" ? "admin@auraevents.com" : "john@example.com",
        role,
      });
    }
  };

  const logout = async () => {
    if (isConfigured && auth) {
      await firebaseSignOut(auth);
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isMock: !isConfigured }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
