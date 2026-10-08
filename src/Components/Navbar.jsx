import Image from "next/image";
import React from "react";
import Logo from "../../public/asset/logo-icon.png";
import Navlink from "./Navlink";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <>
      <div className="flex max-w-5xl mx-auto w-full justify-between items-center p-4">
        <div className="flex justify-center items-center gap-3">
          <div className="bg-green-500  rounded-2xl">
            <Image
              className="p-5"
              src={Logo}
              alt=""
              height={50}
              width={50}
            ></Image>
          </div>
          <div className="space-y-2">
            <h1 className="font-extrabold text-4xl">বাজার দর</h1>
            {date}
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="rounded-2xl">
            <button className="text-[#1D271F] text-2xl p-3 font-bold">সাইন ইন</button>
          </div>
            <div>
                <button className=" text-[#F3FBF4] text-2xl drop-shadow-xl p-3 rounded-2xl bg-green-700">সাইন আপ</button>
            </div>
        </div>
      </div>
      <div>
            <Navlink></Navlink>
      </div>
      <div>{/* marque text */}</div>
    </>
  );
};

export default Navbar;
