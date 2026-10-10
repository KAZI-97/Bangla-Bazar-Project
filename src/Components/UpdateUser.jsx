// "use client";
// import { updateUser } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { toast } from "react-toastify";

// const UpdateUserPage = ({ name }) => {
//   const [newName, setNewName] = useState(name);
//   const router = useRouter();

//   const HandleUpdateUser = async () => {
//     const { error } = await updateUser({
//       name: newName,
//     });
//     if (error) {
//       toast.error("আপডেট ব্যর্থ হয়েছে");
//       return;
//     }
//     toast.success("সফলভাবে আপডেট হয়েছে");
//     router.refresh();
//   };

//   return (
//     <>
//       <div className="bg-[#FAFCFA] border border-gray-200 rounded-2xl p-5">
//         <h2 className="font-semibold mb-4">তথ্য</h2>
//         <div className="px-3 pb-3 space-y-3">
//           <label className="block text-sm">নাম</label>
//           <input
//             value={newName}
//             onChange={(e) => setNewName(e.target.value)}
//             className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-[#FAFCFA] outline-none focus:border-green-600"
//           />
//           <button
//             onClick={HandleUpdateUser}
//             className="w-full bg-green-700 text-white rounded-lg py-2 shadow-md cursor-pointer hover:bg-green-800"
//           >
//             আপডেট
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdateUserPage;

// After Responsive
"use client";
import { updateUser } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const UpdateUserPage = ({ name }) => {
  const [newName, setNewName] = useState(name);
  const router = useRouter();

  const HandleUpdateUser = async () => {
    const { error } = await updateUser({
      name: newName,
    });
    if (error) {
      toast.error("আপডেট ব্যর্থ হয়েছে");
      return;
    }
    toast.success("সফলভাবে আপডেট হয়েছে");
    router.refresh();
  };

  return (
    <>
      <div className="w-full bg-[#FAFCFA] border border-gray-200 rounded-2xl p-3 sm:p-5">
        <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">তথ্য</h2>
        <div className="px-1 sm:px-3 pb-2 sm:pb-3 space-y-3">
          <label className="block text-xs sm:text-sm">নাম</label>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full min-w-0 border border-gray-200 rounded-lg px-3 py-2 text-base bg-[#FAFCFA] outline-none focus:border-green-600"
          />
          <button
            onClick={HandleUpdateUser}
            className="w-full bg-green-700 text-white text-sm sm:text-base rounded-lg py-2.5 sm:py-2 shadow-md cursor-pointer hover:bg-green-800"
          >
            আপডেট
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateUserPage;