"use client";

import { getStreakMessage } from "@/lib/streak";

export default function HabitCard({
  currentStreak,
  bestStreak,
}: {
  currentStreak: number;
  bestStreak: number;
}) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h3 className="text-sm text-gray-500">Study Streak</h3>

      <p className="text-2xl font-bold mt-1">
        🔥 {currentStreak} days
      </p>

      <p className="text-xs text-gray-500">
        Best: {bestStreak} days
      </p>

      <div className="mt-3 text-sm text-green-600">
        {getStreakMessage(currentStreak)}
      </div>
    </div>
  );
}
