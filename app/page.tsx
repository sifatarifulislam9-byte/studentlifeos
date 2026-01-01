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
}import HabitCard from "@/components/HabitCard";

export default function Home() {
  return (
    <main className="p-6 grid md:grid-cols-3 gap-4">
      <HabitCard currentStreak={3} bestStreak={7} />
    </main>
  );
}
