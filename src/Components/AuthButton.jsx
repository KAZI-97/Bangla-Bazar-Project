"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import LoadingPage from "../app/loading";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  if (isPending)
    return (
      <div>
        <LoadingPage></LoadingPage>
      </div>
    );

  //
  if (session?.user) {
    const user = session.user;
    return (
      <div className="relative group">
        <div className="flex items-center gap-3 cursor-pointer">
          {user.image ? (
            <img src={user.image} alt="" className="w-12 h-12 rounded-full" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold">
              {user.name?.charAt(0)}
            </div>
          )}
          <span className="text-xl font-bold">{user.name}</span>
          <span>▼</span>
        </div>

        <div className="absolute right-0 w-40 bg-white rounded-2xl shadow-xl hidden group-hover:block z-50">
          <Link href="/profile" className="block px-4 py-3 hover:bg-green-100">
            প্রোফাইল
          </Link>
          <button
            onClick={() =>
              signOut({
                fetchOptions: { onSuccess: () => router.push("/sign-in") },
              })
            }
            className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 cursor-pointer"
          >
            সাইন আউট
          </button>
        </div>
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
