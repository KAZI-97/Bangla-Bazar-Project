import React from "react";

const FooterPage = () => {
  return (
    <footer className="bg-[#FAFCFA] mt-10 flex flex-col items-center gap-4 px-4 py-6 text-center sm:px-6 sm:py-8 md:flex-row md:justify-between md:gap-8 md:p-10 md:text-left">
      <h1 className="text-base font-semibold text-[#1D171F] sm:text-lg lg:text-xl">
        বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
      </h1>
      <h1 className="text-base font-semibold text-[#1D171F] sm:text-lg lg:text-xl md:text-right">
        সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
      </h1>
    </footer>
  );
};

export default FooterPage;