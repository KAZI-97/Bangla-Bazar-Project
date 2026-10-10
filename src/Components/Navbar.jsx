// import Image from "next/image";
// import React from "react";
// import Logo from "../../public/asset/logo-icon.png";
// import Navlink from "./Navlink";
// import Marquee_Link from "./Marquee";
// import AuthButtons from "./AuthButton";
// import Link from "next/link";

// const Navbar = () => {
//   const date = new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//   });
//   return (
//     <>
//       <div className="bg-[#FAFCFA]">
//         <div className="flex max-w-5xl mx-auto w-full justify-between items-center p-4 ">
//           <div className="flex justify-center items-center gap-3">
//             <div className="bg-green-500  rounded-2xl">
//               <Link href='/'>
//                 <Image
//                   className="p-5"
//                   src={Logo}
//                   alt=""
//                   height={50}
//                   width={50}
//                 ></Image>
//               </Link>
//             </div>
//             <div className="space-y-2">
//               <h1 className="font-extrabold text-4xl">বাজার দর</h1>
//               {date}
//             </div>
//           </div>
//           <AuthButtons />
//         </div>
//       </div>
//       <div>
//         <Navlink></Navlink>
//       </div>
//       <div>
//         <Marquee_Link></Marquee_Link>
//       </div>
//     </>
//   );
// };

// export default Navbar;
// After Responsive
import Image from "next/image";
import React from "react";
import Logo from "../../public/asset/logo-icon.png";
import Navlink from "./Navlink";
import Marquee_Link from "./Marquee";
import AuthButtons from "./AuthButton";
import Link from "next/link";

const Navbar = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
  return (
    <>
      <header className="bg-[#FAFCFA]">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Link href="/" className="shrink-0 rounded-xl bg-green-500 sm:rounded-2xl">
              <Image
                className="h-10 w-10 p-2.5 sm:h-14 sm:w-14 sm:p-3.5"
                src={Logo}
                alt="বাজার দর"
                height={50}
                width={50}
              />
            </Link>
            <div className="min-w-0 space-y-0.5 sm:space-y-2">
              <h1 className="truncate text-2xl font-extrabold sm:text-3xl md:text-4xl">
                বাজার দর
              </h1>
              <p className="hidden text-sm text-gray-600 sm:block md:text-base">{date}</p>
            </div>
          </div>

          <div className="shrink-0">
            <AuthButtons />
          </div>
        </div>
      </header>

      <Navlink />
      <Marquee_Link />
    </>
  );
};

export default Navbar;