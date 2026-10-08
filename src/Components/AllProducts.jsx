// import React from "react";

// const All_Product_Promise = async () => {
//   const res = fetch("https://api.api-store.workers.dev/api/bazardor/products");
//   return (await res).json();
// };

// const AllProductsPage = async () => {
//   const All_Product_Data = await All_Product_Promise();
//   return (
//     <>
//       <div className=" max-w-5xl mx-auto gap-2.5 p-2.5 mt-4">
//         <h1 className="font-extrabold text-3xl">সব পণ্য</h1>
//         <h1>মোট {All_Product_Data.length} পণ্য দেখানো হচ্ছে</h1>
//       </div>
//       <div>
//         {
//             All_Product_Data.map((productData) =>(
//               <>
//                 <div>
                    
//                 </div>
//               </>  
//             ))
//         }
//       </div>
      
//     </>
//   );
// };

// export default AllProductsPage;
import Link from 'next/link';
import React from 'react';
import { BsFillTriangleFill } from 'react-icons/bs';

const All_Product_Promise = async () => {
  const res = fetch('https://api.api-store.workers.dev/api/bazardor/products');
  return (await res).json();
};

const AllProductsPage = async () => {
  const All_Product_Data = await All_Product_Promise();
  return (
    <>
      <div className=" max-w-5xl mx-auto gap-2.5 p-2.5 mt-4">
        <h1 className="font-extrabold text-3xl">সব পণ্য</h1>
        <h1>মোট {All_Product_Data.length} পণ্য দেখানো হচ্ছে</h1>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-2.5">
        {All_Product_Data.map((productData) => (
          <Link
            id ='all-product'
            key={productData.id}
            href={`ProductDetails/${productData.id}`}
            className="block bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">
                {productData.image}
              </div>
              <div>
                <h2 className="font-bold text-lg leading-tight">{productData.nameBn}</h2>
                <p className="text-sm text-gray-500">{productData.unit}</p>
              </div>
            </div>

            <div className="flex items-end justify-between mt-4">
              <div>
                <p className="text-xs text-gray-500">আজকের দাম</p>
                <p className="font-extrabold text-lg">{productData.today} টাকা</p>
              </div>

              {productData.change.dir == 'up' ? (
                <span className="flex items-center gap-1 bg-red-50 text-green-600 text-sm font-bold px-2.5 py-1 rounded-full">
                  <BsFillTriangleFill size={9} />
                  {productData.change.pct}%
                </span>
              ) : productData.change.dir == 'down' ? (
                <span className="flex items-center gap-1 bg-green-50 text-red-600 text-sm font-bold px-2.5 py-1 rounded-full">
                  <BsFillTriangleFill size={9} className="rotate-180" />
                  {Math.abs(productData.change.pct)}%
                </span>
              ) : (
                <span className="flex items-center gap-1 bg-gray-100 text-gray-500 text-sm font-bold px-2.5 py-1 rounded-full">
                  — {productData.change.pct}%
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllProductsPage;