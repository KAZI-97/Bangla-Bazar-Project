"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";

const AuthButtons = () => {
  const { data: session, isPending } = useSession();

  if (isPending) return <div></div>;

  if (session?.user) {
    return (
      <div className="flex gap-3 items-center">
        <span className="text-xl font-bold">{session.user.name}</span>
        <button
          onClick={() => signOut()}
          className="cursor-pointer text-[#F3FBF4] text-xl p-3 rounded-2xl bg-red-600"
        >
          সাইন আউট
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center justify-center">
      <Link href="/sign-in">
        <button className="text-[#1D271F] text-2xl p-3 font-bold cursor-pointer">
          সাইন ইন
        </button>
      </Link>
      <Link href="/sign-up">
        <button className="cursor-pointer text-[#F3FBF4] text-2xl drop-shadow-xl p-3 rounded-2xl bg-green-700">
          সাইন আপ
        </button>
      </Link>
    </div>
  );
};

export default AuthButtons;