export default function EnergyTracker() {
  const energy = 78;
  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow">
      <h3>Daily Energy</h3>
      <p className="text-2xl font-bold">{energy}%</p>
    </div>
  );
}
