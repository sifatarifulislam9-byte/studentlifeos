export function updateStreak(lastDate: string) {
  const today = new Date().toDateString();
  if (lastDate === today) return "same";
  return "increment";
}
export function getStreakMessage(days: number) {
  if (days >= 30) return "🏆 Month Master";
  if (days >= 7) return "🔥 Week Warrior";
  if (days >= 1) return "🌱 First Step";
  return "Start your streak!";
}
