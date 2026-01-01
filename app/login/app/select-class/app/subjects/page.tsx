"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const SUBJECTS: any = {
  "Class 9": ["Bangla", "English", "Math", "Science", "ICT"],
  "Class 10": ["Bangla", "English", "Math", "Physics", "Chemistry", "Biology"],
  "Class 11": ["Physics", "Chemistry", "Math", "Biology", "ICT"],
  "Class 12": ["Physics", "Chemistry", "Math", "Biology", "ICT"],
};

export default function Subjects() {
  const params = useSearchParams();
  const router = useRouter();
  const selectedClass = params.get("class")!;
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (sub: string) => {
    setSelected((prev) =>
      prev.includes(sub)
        ? prev.filter((s) => s !== sub)
        : [...prev, sub]
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">
        Select Subjects for {selectedClass}
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {SUBJECTS[selectedClass].map((sub: string) => (
          <button
            key={sub}
            onClick={() => toggle(sub)}
            className={`p-3 rounded-xl border ${
              selected.includes(sub)
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      <button
        onClick={() => router.push("/")}
        className="mt-6 px-6 py-3 bg-green-500 text-white rounded-xl"
      >
        Continue to Dashboard
      </button>
    </div>
  );
}
