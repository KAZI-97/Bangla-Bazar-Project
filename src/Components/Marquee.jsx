import MarqueeText from "react-marquee-text";
// import "MarqueeText/styles.css"
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
    <div>
      <MarqueeText direction="left" duration='30' className="bg-[#FAFCFA] mt-0.5">
        {Marquee_Link_Data.map((text, id) => (
          <span key={id} className="flex justify-center items-center mr-5">
            <span className="space-x-0.5">{text.categoryIcon}</span>

            <span className="p-1">{text.today} টাকা/কেজি</span>

            <span className="flex justify-center items-center gap-1">
              {text.change.dir === "up" ? (
                <BsFillTriangleFill size={15}className="text-green-700" />
              ) :text.change.dir == 'down'?(
                <BsFillTriangleFill size={15} className="text-red-700 rotate-180" />
              ):(<PiApproximateEquals size={20} className="text-gray-700"/>)
            }

              <span>{Math.abs(text.change.pct)}%</span>
            </span>
          </span>
        ))}
      </MarqueeText>
    </div>
  );
};

export default Marquee_Link;
