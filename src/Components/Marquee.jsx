// import MarqueeText from "react-marquee-text";
// import { BsFillTriangleFill } from "react-icons/bs";
// import { PiApproximateEquals } from "react-icons/pi";

// const Marquee_Promise = async () => {
//   const res = await fetch(
//     "https://api.api-store.workers.dev/api/bazardor/products",
//   );
//   return res.json();
// };

// const Marquee_Link = async () => {
//   const Marquee_Link_Data = await Marquee_Promise();

//   return (
//     <div>
//       <MarqueeText
//         direction="left"
//         duration="30"
//         className="bg-[#FAFCFA] mt-0.5"
//       >
//         {Marquee_Link_Data.map((text, id) => (
//           <span key={id} className="flex justify-center items-center mr-5">
//             <span className="space-x-0.5">{text.categoryIcon}</span>

//             <span className="p-1">{text.today} টাকা/কেজি</span>

//             <span className="flex justify-center items-center gap-1">
//               {text.change.dir === "up" ? (
//                 <BsFillTriangleFill size={15} className="text-green-700" />
//               ) : text.change.dir == "down" ? (
//                 <BsFillTriangleFill
//                   size={15}
//                   className="text-red-700 rotate-180"
//                 />
//               ) : (
//                 <PiApproximateEquals size={20} className="text-gray-700" />
//               )}

//               <span>{Math.abs(text.change.pct)}%</span>
//             </span>
//           </span>
//         ))}
//       </MarqueeText>
//     </div>
//   );
// };

// export default Marquee_Link;
// // // "use client";
// // // import { useEffect, useState } from "react";
// // // import MarqueeText from "react-marquee-text";
// // // import { BsFillTriangleFill } from "react-icons/bs";
// // // import { PiApproximateEquals } from "react-icons/pi";

// // // const Marquee_Link = () => {
// // //   const [data, setData] = useState([]);

// // //   useEffect(() => {
// // //     fetch("https://api.api-store.workers.dev/api/bazardor/products")
// // //       .then((res) => res.json())
// // //       .then((json) => setData(json))
// // //       .catch(() => setData([]));
// // //   }, []);

// // //   if (!data.length) return null;

// // //   return (
// // //     <div>
// // //       <MarqueeText
// // //         direction="left"
// // //         duration={30}
// // //         className="bg-[#FAFCFA] mt-0.5"
// // //       >
// // //         {data.map((text, id) => (
// // //           <span key={id} className="flex justify-center items-center mr-5">
// // //             <span className="space-x-0.5">{text.categoryIcon}</span>
// // //             <span className="p-1">{text.today} টাকা/কেজি</span>
// // //             <span className="flex justify-center items-center gap-1">
// // //               {text.change.dir === "up" ? (
// // //                 <BsFillTriangleFill size={15} className="text-green-700" />
// // //               ) : text.change.dir === "down" ? (
// // //                 <BsFillTriangleFill
// // //                   size={15}
// // //                   className="text-red-700 rotate-180"
// // //                 />
// // //               ) : (
// // //                 <PiApproximateEquals size={20} className="text-gray-700" />
// // //               )}
// // //               <span>{Math.abs(text.change.pct)}%</span>
// // //             </span>
// // //           </span>
// // //         ))}
// // //       </MarqueeText>
// // //     </div>
// // //   );
// // // };

// // // export default Marquee_Link;


// // const Marquee_Promise = async () => {
// //   const res = await fetch(
// //     "https://api.api-store.workers.dev/api/bazardor/products",
// //   );
// //   return res.json();
// // };

// // const Marquee_Link = async () => {
// //   const data = await Marquee_Promise();
// //   return <MarqueeClientPage data={data} />;
// // };

// // export default Marquee_Link;

// After Responsive
import MarqueeText from "react-marquee-text";
import { BsFillTriangleFill } from "react-icons/bs";
import { PiApproximateEquals } from "react-icons/pi";

const Marquee_Promise = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  return res.json();
};

const Marquee_Link = async () => {
  const Marquee_Link_Data = await Marquee_Promise();

  return (
    <div className="mt-0.5 w-full overflow-hidden bg-[#FAFCFA] py-2 sm:py-3">
      <MarqueeText direction="left" duration={30} pauseOnHover>
        {Marquee_Link_Data.map((text, id) => (
          <span
            key={id}
            className="mr-4 flex items-center justify-center gap-1 whitespace-nowrap text-xs sm:mr-6 sm:gap-1.5 sm:text-sm md:mr-8 md:text-base"
          >
            <span>{text.categoryIcon}</span>

            <span>{text.today} টাকা/কেজি</span>

            <span className="flex items-center gap-1">
              {text.change?.dir === "up" ? (
                <BsFillTriangleFill className="h-3 w-3 text-green-700 sm:h-4 sm:w-4" />
              ) : text.change?.dir === "down" ? (
                <BsFillTriangleFill className="h-3 w-3 rotate-180 text-red-700 sm:h-4 sm:w-4" />
              ) : (
                <PiApproximateEquals className="h-4 w-4 text-gray-700 sm:h-5 sm:w-5" />
              )}
              <span>{Math.abs(text.change?.pct ?? 0)}%</span>
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee_Link;