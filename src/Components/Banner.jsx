// import React from "react";
// import Banner_Image from "../../public/asset/bazar-hero.png";
// import Image from "next/image";
// import Link from "next/link";

// const Banner = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
//   return (
//     <div className="flex justify-between items-center max-w-5xl mx-auto border-box border-none rounded-4xl bg-[#FAFCFA] mt-8">
//       <div className="p-2.5 space-y-5">
//         <span
//             className="bg-green-100 font-bold border rounded-4xl p-2.5 border-none inline-block">{date}
//         </span>
//         <h1 className="text-4xl font-extrabold">আজকের বাজারের দাম এক নজরে</h1>
//         <p className="text-2xl">
//           চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
//           বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
//         </p>
//         <Link href="#all-product">
//           <button className="rounded-4xl p-4 bg-green-700 text-[#F3FBF4] mb-4 cursor-pointer">সব পণ্য দেখুন</button>
//         </Link>
//       </div>
//       <div>
//         <Image src={Banner_Image} alt='Hero Pic' width={500} height={500}></Image>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// Banner After Responsive
import React from "react";
import Banner_Image from "../../public/asset/bazar-hero.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <section className="mx-4 mt-4 sm:mx-6 sm:mt-6 lg:mt-8">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 overflow-hidden rounded-3xl bg-[#FAFCFA] p-5 sm:p-8 md:flex-row md:justify-between md:gap-8 lg:rounded-[2rem] lg:p-10">
        <div className="w-full space-y-4 text-center sm:space-y-5 md:w-1/2 md:text-left">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold sm:px-4 sm:py-2 sm:text-sm">
            {date}
          </span>

          <h1 className="text-2xl font-extrabold leading-snug sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="text-sm leading-relaxed text-gray-700 sm:text-base lg:text-xl">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href="#all-product"
            className="inline-block rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-[#F3FBF4] active:bg-green-800 sm:px-6 sm:py-3.5 sm:text-base"
          >
            সব পণ্য দেখুন
          </Link>
        </div>

        <div className="w-full max-w-[260px] sm:max-w-xs md:w-1/2 md:max-w-none">
          <Image
            src={Banner_Image}
            alt="বাজার দর হিরো ছবি"
            width={500}
            height={500}
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="mx-auto h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;