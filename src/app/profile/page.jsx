"use client";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import UpdateUserPage from "@/Components/UpdateUser";

export default function ProfilePage() {
  const { data: session } = useSession();
  const router = useRouter();
  const user = session?.user;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold">আমার প্রোফাইল</h1>
      <p className="text-sm text-gray-600 mb-4">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>

      <div className="max-w-xl space-y-4">
        {/* Top card */}
        <div className="bg-[#FAFCFA] border border-gray-200 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {user?.image ? (
              <img
                src={user.image}
                alt=""
                className="w-16 h-16 rounded-xl object-cover"
              />
            ) : (
              <div className="w-16 h-16 rounded-xl bg-green-700 text-white flex items-center justify-center text-2xl font-bold">
                {user?.name?.charAt(0)}
              </div>
            )}
            <div>
              <p className="text-lg font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={() =>
              signOut({
                fetchOptions: { onSuccess: () => router.push("/sign-in") },
              })
            }
            className="border border-red-500 text-red-600 text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-red-50"
          >
            ↩ সাইন আউট
          </button>
        </div>
        {user && <UpdateUserPage name={user.name} />}
      </div>
    </div>
  );
}