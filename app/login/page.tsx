"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => signInWithPopup(auth, provider)}
        className="px-6 py-3 bg-blue-500 text-white rounded-xl"
      >
        Sign in with Google
      </button>
    </div>
  );
}
