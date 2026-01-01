"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [user] = useAuthState(auth);

  if (!user) return <p>Loading...</p>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Welcome back, {user.displayName?.split(" ")[0]} 👋
      </h1>
      <Dashboard />
    </main>
  );
}
