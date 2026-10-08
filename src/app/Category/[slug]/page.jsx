import React from "react";
import Link from "next/link";
import NotFoundPage from "@/app/not-found";

const CategoryPage = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  );
  const Category_Data = await res.json();

  if (Category_Data.length === 0) {
    return (
      NotFoundPage()
    );
  }

  const dirStyle = {
    up: { cls: "bg-red-50 text-green-600", sign: "▲" },
    down: { cls: "bg-green-50 text-red-600", sign: "▼" },
    flat: { cls: "bg-gray-100 text-gray-500", sign: "—" },
  };

  return (
    <div className="min-h-screen bg-[#f3f6f4]">
      <div className="max-w-5xl mx-auto p-4 space-y-4">
        {/* category header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-3xl shrink-0">
            {Category_Data[0]?.categoryIcon}
          </div>
          <div>
            <h1 className="font-extrabold text-3xl leading-tight">
              {Category_Data[0]?.categoryNameBn}
            </h1>
            <p className="text-sm text-gray-500">
              {Category_Data.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>

        {/* sort area */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-end gap-3">
          <span className="text-sm text-gray-600">সাজান</span>
          <select className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm bg-white">
            <option value="default">ডিফল্ট</option>
            {/* sort options here */}
          </select>
        </div>

        <p className="text-sm text-gray-600 px-1">
          মোট {Category_Data.length}টি পণ্য দেখানো হচ্ছে
        </p>

        {/* products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Category_Data.map((product) => {
            const d = dirStyle[product.change.dir] ?? dirStyle.flat;
            return (
              <Link
                key={product.id}
                href={`/ProductDetails/${product.id}`}
                className="block bg-white rounded-2xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                    {product.image}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg leading-tight">
                      {product.nameBn}
                    </h2>
                    <p className="text-sm text-gray-500">
                      প্রতি {product.unit}
                    </p>
                  </div>
                </div>

                <div className="flex items-end justify-between mt-4">
                  <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="font-extrabold text-lg">
                      {product.today}{" "}
                      <span className="font-normal text-base">টাকা</span>
                    </p>
                  </div>
                  <span
                    className={`text-sm font-bold px-2.5 py-1 rounded-full ${d.cls}`}
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

export default CategoryPage;
