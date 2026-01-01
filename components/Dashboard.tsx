export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="p-4 rounded-xl bg-white shadow">
        <h3>Today's Study Plan</h3>
        <p className="text-sm">2/4 tasks completed</p>
        <ul className="text-sm mt-2">
          <li>📘 Math worksheet (Today)</li>
          <li>📗 Physics Ch 5 (Tomorrow)</li>
        </ul>
      </div>

      <div className="p-4 rounded-xl bg-white shadow">
        <h3>Future You Projection</h3>
        <p>Projected Grade: A</p>
      </div>

      <div className="p-4 rounded-xl bg-white shadow">
        <h3>Daily Habit</h3>
        <p>Sleep: 7h</p>
        <p>Focus: 60%</p>
      </div>
    </div>
  );
}
