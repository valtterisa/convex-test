"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SignIn() {
  const { signIn } = useAuthActions();
  const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 w-full max-w-lg mx-auto h-screen justify-center items-center px-4">
      <div className="text-center flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
          <Image src="/convex.svg" alt="Convex Logo" width={90} height={90} />
          <div className="w-px h-20 bg-slate-300 dark:bg-slate-600"></div>
          <Image
            src="/nextjs-icon-light-background.svg"
            alt="Next.js Logo"
            width={90}
            height={90}
            className="dark:hidden"
          />
          <Image
            src="/nextjs-icon-dark-background.svg"
            alt="Next.js Logo"
            width={90}
            height={90}
            className="hidden dark:block"
          />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
          Convex + Next.js + Convex Auth
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          This demo uses Convex Auth for authentication, so you will need to
          sign in or sign up to access the demo.
        </p>
      </div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </div>
  );
}
