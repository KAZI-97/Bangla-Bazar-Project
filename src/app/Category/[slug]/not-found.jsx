import Link from "next/link";
import React from "react";

const CategoryNotFound = () => {
  return (
    <>
      <div className="min-h-screen bg-[#f3f6f4] flex items-center justify-center">
        {" "}
        <div className="text-center max-w-md px-4">
          {" "}
          <h1 className="text-4xl font-extrabold">
            {" "}
            কোনো পণ্য পাওয়া যায়নি{" "}
          </h1>{" "}
          <p className="text-gray-500 mt-3">
            {" "}
            বিভাগটি সঠিক নয়।{" "}
          </p>{" "}
          <Link
            href="/"
            className="inline-block mt-6 rounded-xl bg-red-600 px-6 py-3 text-white font-bold"
          >
            {" "}
            হোম পেজে ফিরে যান{" "}
          </Link>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default CategoryNotFound;
