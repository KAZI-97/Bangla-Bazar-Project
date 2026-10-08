import React from 'react';
import Link from 'next/link';

const Product_Details_Page = async ({ params }) => {
  const { productid } = await params;
  const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${productid}`);
  const product = await res.json();

  const diff = Math.abs(product.today - product.yesterday);
  const dir = product.change.dir;
  const minPrice = Math.min(...product.markets.map((m) => m.min));
  const maxPrice = Math.max(...product.markets.map((m) => m.max));

  return (
    <div className="min-h-screen bg-[#f3f6f4]">
      <div className="max-w-5xl mx-auto p-4 space-y-4">
        {/* breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 px-1">
          <Link href="/" className="hover:underline">হোম</Link>
          <span>›</span>
          <span>{product.categoryNameBn}</span>
          <span>›</span>
          <span className="text-gray-800">{product.nameBn}</span>
        </nav>

        {/* top card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center text-3xl shrink-0">
              {product.image}
            </div>
            <div>
              <h1 className="font-extrabold text-3xl leading-tight">{product.nameBn}</h1>
              <p className="text-sm text-gray-500 mt-1">
                প্রতি {product.unit} · {product.categoryNameBn}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                গতকালের তুলনায় আজ দাম{' '}
                <b>{dir === 'up' ? 'বেড়েছে' : dir === 'down' ? 'কমেছে' : 'অপরিবর্তিত'}</b> · {diff} টাকা
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl px-8 py-4 text-center shrink-0">
            <p className="text-sm text-gray-500">আজকের দাম</p>
            <p className="font-extrabold text-4xl my-1">{product.today}</p>
            <p className="text-sm text-gray-600">টাকা / {product.unit}</p>
            <p className={`text-sm font-bold mt-1 ${dir === 'up' ? 'text-green-600' : dir === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
              {dir === 'up' ? '▲' : dir === 'down' ? '▼' : '—'} {Math.abs(product.change.pct)}%
            </p>
          </div>
        </div>

        {/* summary + table */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="font-bold text-lg mb-3">দামের সারসংক্ষেপ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-600">সর্বনিম্ন দাম</p>
              <p className="text-green-700 font-extrabold text-2xl mt-1">
                {minPrice} <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">সবচেয়ে কম দামের বাজার</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-600">সর্বাধিক দাম</p>
              <p className="text-red-600 font-extrabold text-2xl mt-1">
                {maxPrice} <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">সবচেয়ে বেশি দামের বাজার</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-600">গড় দাম</p>
              <p className="text-green-700 font-extrabold text-2xl mt-1">
                {product.today} <span className="text-sm font-semibold">টাকা</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">প্রতি {product.unit}-এর হিসাব</p>
            </div>
          </div>

          <h2 className="font-bold text-lg mt-6 mb-3">বাজারভিত্তিক আজকের দাম</h2>
          <div className="rounded-xl border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="text-gray-500 border-b border-gray-200">
                  <th className="text-left font-medium p-3">বাজার</th>
                  <th className="text-left font-medium p-3">বিভাগ</th>
                  <th className="text-right font-medium p-3">সর্বনিম্ন</th>
                  <th className="text-right font-medium p-3">সর্বাধিক</th>
                  <th className="text-right font-medium p-3">গড়</th>
                </tr>
              </thead>
              <tbody>
                {product.markets.map((m, i) => (
                  <tr
                    key={m.market}
                    className={`border-b border-gray-200 last:border-0 ${i % 2 === 1 ? 'bg-gray-50' : ''}`}
                  >
                    <td className="p-3 font-semibold">{m.market}</td>
                    <td className="p-3 text-gray-700">{m.division}</td>
                    <td className="p-3 text-right text-gray-700">{m.min} টাকা</td>
                    <td className="p-3 text-right text-gray-700">{m.max} টাকা</td>
                    <td className="p-3 text-right font-bold">{(m.min + m.max) / 2} টাকা</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details_Page;