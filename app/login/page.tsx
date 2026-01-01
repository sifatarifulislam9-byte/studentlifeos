"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const login = async () => {
    await signInWithPopup(auth, provider);
    router.push("/select-class");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl"
      >
        Sign in with Google
      </button>
    </div>
  );
}
