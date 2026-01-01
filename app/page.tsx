export default function Home() {
  return <h1>Website working</h1>;
}
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <main className="p-6">
        <p>Loading...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-6">
        <p>Error: {error.message}</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="p-6">
        <p>Please log in to continue.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Welcome back, {user.displayName?.split(" ")[0]} 👋
      </h1>
      <Dashboard />
    </main>
  );
}
