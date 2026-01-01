"use client";
import { useRouter } from "next/navigation";

const classes = ["Class 9", "Class 10", "Class 11", "Class 12"];

export default function SelectClass() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">Select Your Class</h2>

      {classes.map((cls) => (
        <button
          key={cls}
          onClick={() => router.push(`/subjects?class=${cls}`)}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl w-60"
        >
          {cls}
        </button>
      ))}
    </div>
  );
}
