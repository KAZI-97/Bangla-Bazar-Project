// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Nav_link_promise = async () => {
//   const res = await fetch(
//     "https://api.api-store.workers.dev/api/bazardor/categories",
//   );
//   return res.json();
// };
// const Navlink = async () => {
//   const Nav_link_data = await Nav_link_promise();
//   return (
//     <div className="bg-[#FAFCFA] mt-0.5">
//       <div className="flex gap-5 items-center justify-center p-4">
//         {Nav_link_data.map((cate, ind) => (
//           <div key={ind} className="flex items-center gap-2">
//             <span>{cate.icon}</span>
//             <Link href={`/Category/${cate.slug}`}> {cate.nameBn}</Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navlink;

// After Responsive
import Link from "next/link";
import React from "react";

const Nav_link_promise = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );
  return res.json();
};

const Navlink = async () => {
  const Nav_link_data = await Nav_link_promise();
  return (
    <nav className="mt-0.5 bg-[#FAFCFA]">
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-2 px-3 py-3 min-[480px]:grid-cols-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 sm:gap-y-2 sm:px-4">
        {Nav_link_data.map((cate) => (
          <Link
            key={cate.slug}
            href={`/Category/${cate.slug}`}
            className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-white px-1 py-2 text-center text-xs leading-tight shadow-sm active:bg-green-100 sm:flex-row sm:gap-1.5 sm:rounded-full sm:bg-transparent sm:px-3 sm:py-1.5 sm:text-base sm:shadow-none sm:hover:bg-green-100"
          >
            <span className="text-lg sm:text-base">{cate.icon}</span>
            <span>{cate.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navlink;