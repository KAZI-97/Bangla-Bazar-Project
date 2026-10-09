import Image from "next/image";
import React from "react";
import Logo from "../../public/asset/logo-icon.png";
import Navlink from "./Navlink";
import Marquee_Link from "./Marquee";
import AuthButtons from "./AuthButton";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <>
      <div className="bg-[#FAFCFA]">
        <div className="flex max-w-5xl mx-auto w-full justify-between items-center p-4 ">
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
           <AuthButtons />
        </div>
      </div>
      <div>
        <Navlink></Navlink>
      </div>
      <div>
        <Marquee_Link></Marquee_Link>
      </div>
    </>
  );
};

export default Navbar;
