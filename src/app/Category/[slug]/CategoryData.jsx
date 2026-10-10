// 'use client'
// import Link from "next/link";
// import React, { useState } from "react";

// const CategoryClientpage = ({ Category_Data }) => {
//   const dirStyle = {
//     up: { cls: "bg-red-50 text-green-600", sign: "▲" },
//     down: { cls: "bg-green-50 text-red-600", sign: "▼" },
//     flat: { cls: "bg-gray-100 text-gray-500", sign: "—" },
//   };
//   const [sortprice, setsortprice] = useState("default");
//   const sortedData = [...Category_Data];
//   if (sortprice === "asc_price")
//     sortedData.sort((a, b) => Number(a.today) - Number(b.today));
//   if (sortprice === "des_price")
//     sortedData.sort((a, b) => Number(b.today) - Number(a.today));

//   return (
//     <div className="min-h-screen bg-[#f3f6f4]">
//       <div className="max-w-5xl mx-auto p-4 space-y-4">
//         {/* category header */}
//         <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
//           <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-3xl shrink-0">
//             {Category_Data[0]?.categoryIcon}
//           </div>
//           <div>
//             <h1 className="font-extrabold text-3xl leading-tight">
//               {Category_Data[0]?.categoryNameBn}
//             </h1>
//             <p className="text-sm text-gray-500">
//               {Category_Data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
//             </p>
//           </div>
//         </div>

//         {/* sort area */}
//         <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-end gap-3">
//           <span className="text-sm text-gray-600">সাজান</span>
//           <select 
//           value={sortprice}
//           onChange={(e) => setsortprice(e.target.value)}
//           className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white">
//             <option value="default">ডিফল্ট</option>
//             <option value="asc_price">দাম: কম থেকে বেশি</option>
//             <option value="des_price">দাম: বেশি থেকে কম</option>
//             {/* sort options here */}
//           </select>
//         </div>

//         <p className="text-sm text-gray-600 px-1">
//           মোট {Category_Data.length}টি পণ্য দেখানো হচ্ছে
//         </p>

//         {/* products */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//           {sortedData.map((product) => {
//             const d = dirStyle[product.change.dir] ?? dirStyle.flat;
//             return (
//               <Link
//                 key={product.id}
//                 href={`/ProductDetails/${product.id}`}
//                 className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition"
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
//                     {product.image}
//                   </div>
//                   <div>
//                     <h2 className="font-bold text-lg leading-tight">
//                       {product.nameBn}
//                     </h2>
//                     <p className="text-sm text-gray-500">
//                       প্রতি {product.unit}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-end justify-between mt-4">
//                   <div>
//                     <p className="text-xs text-gray-500">আজকের দাম</p>
//                     <p className="font-extrabold text-lg">
//                       {product.today}{" "}
//                       <span className="font-normal text-base">টাকা</span>
//                     </p>
//                   </div>
//                   <span
//                     className={`text-sm font-bold px-2.5 py-1 rounded-full ${d.cls}`}
//                   >
//                     {d.sign} {Math.abs(product.change.pct)}%
//                   </span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryClientpage;

// After Responsive
'use client'
import Link from "next/link";
import React, { useState } from "react";

const CategoryClientpage = ({ Category_Data }) => {
  const dirStyle = {
    up: { cls: "bg-red-50 text-green-600", sign: "▲" },
    down: { cls: "bg-green-50 text-red-600", sign: "▼" },
    flat: { cls: "bg-gray-100 text-gray-500", sign: "—" },
  };
  const [sortprice, setsortprice] = useState("default");
  const sortedData = [...Category_Data];
  if (sortprice === "asc_price")
    sortedData.sort((a, b) => Number(a.today) - Number(b.today));
  if (sortprice === "des_price")
    sortedData.sort((a, b) => Number(b.today) - Number(a.today));

  return (
    <div className="min-h-screen w-full bg-[#f3f6f4]">
      <div className="max-w-5xl mx-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
        {/* category header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-5 flex items-center gap-3 sm:gap-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 flex items-center justify-center text-2xl sm:text-3xl shrink-0">
            {Category_Data[0]?.categoryIcon}
          </div>
          <div className="min-w-0">
            <h1 className="font-extrabold text-2xl sm:text-3xl leading-tight break-words">
              {Category_Data[0]?.categoryNameBn}
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              {Category_Data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* sort area */}
        <div className="bg-white rounded-2xl border border-gray-200 p-3 sm:p-4 flex items-center justify-end gap-2 sm:gap-3">
          <span className="text-xs sm:text-sm text-gray-600 shrink-0">সাজান</span>
          <select 
          value={sortprice}
          onChange={(e) => setsortprice(e.target.value)}
          className="min-w-0 max-w-full border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 text-sm bg-white">
            <option value="default">ডিফল্ট</option>
            <option value="asc_price">দাম: কম থেকে বেশি</option>
            <option value="des_price">দাম: বেশি থেকে কম</option>
            {/* sort options here */}
          </select>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 px-1">
          মোট {Category_Data.length}টি পণ্য দেখানো হচ্ছে
        </p>

        {/* products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {sortedData.map((product) => {
            const d = dirStyle[product.change.dir] ?? dirStyle.flat;
            return (
              <Link
                key={product.id}
                href={`/ProductDetails/${product.id}`}
                className="block min-w-0 bg-white rounded-2xl border border-gray-200 shadow-sm p-3 sm:p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 flex items-center justify-center text-xl sm:text-2xl shrink-0">
                    {product.image}
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-bold text-base sm:text-lg leading-tight break-words">
                      {product.nameBn}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                      প্রতি {product.unit}
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-2 mt-3 sm:mt-4">
                  <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="font-extrabold text-base sm:text-lg">
                      {product.today}{" "}
                      <span className="font-normal text-sm sm:text-base">টাকা</span>
                    </p>
                  </div>
                  <span
                    className={`shrink-0 whitespace-nowrap text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-1 rounded-full ${d.cls}`}
                  >
                    {d.sign} {Math.abs(product.change.pct)}%
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryClientpage;