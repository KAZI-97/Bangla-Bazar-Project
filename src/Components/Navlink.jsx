import Image from "next/image";
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
    <div className="bg-[#FAFCFA] mt-0.5">
      <div className="flex gap-5 items-center justify-center p-4">
        {Nav_link_data.map((cate, ind) => (
          <div key={ind} className="flex items-center gap-2">
            <span>{cate.icon}</span>
            <Link href={cate.slug}> {cate.nameBn}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navlink;
