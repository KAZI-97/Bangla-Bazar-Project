import React from "react";
import Banner_Image from "../../public/asset/bazar-hero.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto border-box border-none rounded-4xl bg-[#FAFCFA] mt-8">
      <div className="p-2.5 space-y-5">
        <span
            className="bg-green-100 font-bold border rounded-4xl p-2.5 border-none inline-block">{date}
        </span>
        <h1 className="text-4xl font-extrabold">আজকের বাজারের দাম এক নজরে</h1>
        <p className="text-2xl">
          চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
          বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
        </p>
        <Link href="#all-product">
          <button className="rounded-4xl p-4 bg-green-700 text-[#F3FBF4] mb-4 cursor-pointer">সব পণ্য দেখুন</button>
        </Link>
      </div>
      <div>
        <Image src={Banner_Image} alt='Hero Pic' width={500} height={500}></Image>
      </div>
    </div>
  );
};

export default Banner;
