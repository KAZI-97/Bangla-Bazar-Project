// "use client";
// import Link from "next/link";
// import { useSession, signOut } from "@/lib/auth-client";
// import LoadingPage from "../app/loading";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const AuthButtons = () => {
//   const { data: session, isPending } = useSession();
//   const router = useRouter();

//   if (isPending)
//     return (
//       <div>
//         <LoadingPage></LoadingPage>
//       </div>
//     );

//   //
//   if (session?.user) {
//     const user = session.user;
//     return (
//       <div className="relative group">
//         <div className="flex items-center gap-3 cursor-pointer">
//           {user.image ? (
//             <Image src={user.image} alt="" width={50} height={50} className="w-12 h-12 rounded-full" />
//           ) : (
//             <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center text-xl font-bold">
//               {user.name?.charAt(0)}
//             </div>
//           )}
//           <span className="text-xl font-bold">{user.name}</span>
//           <span>▼</span>
//         </div>

//         <div className="absolute right-0 w-40 bg-white rounded-2xl shadow-xl hidden group-hover:block z-50">
//           <Link href="/profile" className="block px-4 py-3 hover:bg-green-100">
//             প্রোফাইল
//           </Link>
//           <button
//             onClick={() =>
//               signOut({
//                 fetchOptions: { onSuccess: () => router.push("/sign-in") },
//               })
//             }
//             className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 cursor-pointer"
//           >
//             সাইন আউট
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex gap-2 items-center justify-center">
//       <Link href="/sign-in">
//         <button className="text-[#1D271F] text-2xl p-3 font-bold cursor-pointer">
//           সাইন ইন
//         </button>
//       </Link>
//       <Link href="/sign-up">
//         <button className="cursor-pointer text-[#F3FBF4] text-2xl drop-shadow-xl p-3 rounded-2xl bg-green-700">
//           সাইন আপ
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default AuthButtons;

// After Responsive
"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "@/lib/auth-client";
import LoadingPage from "../app/loading";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AuthButtons = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  if (isPending)
    return (
      <div>
        <LoadingPage />
      </div>
    );

  if (session?.user) {
    const user = session.user;
    return (
      <div className="relative group">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex cursor-pointer items-center gap-2 sm:gap-3"
        >
          {user.image ? (
            <Image
              src={user.image}
              alt=""
              width={50}
              height={50}
              className="h-9 w-9 rounded-full sm:h-12 sm:w-12"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 text-base font-bold text-white sm:h-12 sm:w-12 sm:text-xl">
              {user.name?.charAt(0)}
            </div>
          )}
          <span className="hidden max-w-[10rem] truncate text-base font-bold sm:block md:text-xl">
            {user.name}
          </span>
          <span className="text-xs sm:text-base">▼</span>
        </button>

        <div
          className={`absolute right-0 z-50 w-40 rounded-2xl bg-white shadow-xl group-hover:block ${
            open ? "block" : "hidden"
          }`}
        >
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-t-2xl px-4 py-3 hover:bg-green-100"
          >
            প্রোফাইল
          </Link>
          <button
            onClick={() =>
              signOut({
                fetchOptions: { onSuccess: () => router.push("/sign-in") },
              })
            }
            className="w-full cursor-pointer rounded-b-2xl px-4 py-3 text-left text-red-600 hover:bg-red-50"
          >
            সাইন আউট
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      <Link
        href="/sign-in"
        className="cursor-pointer whitespace-nowrap p-2 text-base font-bold text-[#1D271F] sm:p-3 sm:text-xl md:text-2xl"
      >
        সাইন ইন
      </Link>
      <Link
        href="/sign-up"
        className="cursor-pointer whitespace-nowrap rounded-xl bg-green-700 px-3 py-2 text-base text-[#F3FBF4] drop-shadow-xl sm:rounded-2xl sm:p-3 sm:text-xl md:text-2xl"
      >
        সাইন আপ
      </Link>
    </div>
  );
};

export default AuthButtons;