import Image from "next/image";
import { mediaQueryNav } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";
import ShopButton from "./ShopButton";

export default function WhoWeAre() {
  const isSmallScreen = useMediaQuery(mediaQueryNav);

  const p = {
    fontFamily: "Europa",
    color: "#000000",
    fontSize: "17px",
  };

  const title = {
    fontFamily: "Grandma",
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    fontSize: "37px",
    color: "#553605",
    fontWeight: "bold",
    margin: '2.5rem auto'
  };

  const w50 = isSmallScreen ? '' : "w-1/2";

  return (
    <div className="flex p-6  flex-wrap  bg-[#EAD1A4]">
      <div className={`${w50} flex justify-center `}>
        <Image
          src="https://picsum.photos/400/400"
          alt="who-we-are"
          width={400}
          height={400}
        />
      </div>

      <div className={`${w50} `}>
        <h1 style={title}> Who We Are </h1>
        <p style={p}>
          In a world of artificial this and manufactured that, The Honey Store
          is a wonderful demonstration of the things that come from Nature. The
          Noyes Family has been harvesting Natures bounty for over 30 years to
          share with families like yours.
        </p>
        <p style={p}>
          If you are health concious, or just curious, you will love your visit
          to our new web site. Take time to learn a little more about honey and
          its benefits and uses. Look for the special honey products that only
          we have, and order a gift for that special someone, for Christmas, or
          anytime to brighten their day.
        </p>
        <ShopButton title='SHOP ONLINE' url="/products"/>
      </div>
    </div>
  );
}
