import HabitCard from "@/components/HabitCard";

export default function Home() {
  return (
    <main className="p-6 grid md:grid-cols-3 gap-4">
      <HabitCard currentStreak={3} bestStreak={7} />
    </main>
  );
}
