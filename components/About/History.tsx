import { mediaQueryNav } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";
import ShopBtn from '../Navbar/ShopBtn'; 

export default function History() {
  const isSmallScreen = useMediaQuery(mediaQueryNav);

  const p = {
    fontFamily: "Europa",
    color: "#000000",
    fontSize: "17px",
    margin: '1rem'
  };

  const title = {
    fontFamily: "Grandma",
    textAlign: "center" as const,
    textTransform: "uppercase" as const,
    fontSize: "44px",
    color: "#553605",
    fontWeight: "bold",
    margin: "2.5rem auto",
  };

  const w50 = isSmallScreen ? "" : "w-1/2";

  return (
    <>
        <h1 style={title}> OUR HISTORY </h1>
    <div className="flex p-6  flex-wrap">
      <div className={`${w50} `}>
        
        <p style={p}>
          Noyes Apiaries was started in September 1973 by Tony and Debbie Noyes
          in New Plymouth, Idaho. From our beginning, we have produced quality
          honey and helped to pollinate various crops in the Treasure Valley of
          Idaho. As our operation grew, we expanded into central California to
          pollinate almonds.
        </p>
        <p style={p}>
          In 1986 we expanded to include summer locations in Turtle Lake, North
          Dakota for the production of clover honey. We have always been a
          family operation so we were pleased when in 1997 our son Nick took
          over the management of the bees in the local area.
        </p>
      </div>

      <div className={`${w50} `}>
        <p style={p}>
          The Honey Store is a natural step in our growth, and service to our
          devoted clients. We opened in Fruitland, Idaho in May 2000 and have
          been able to expand our products as well as bring other wonderful
          treats to our valued customers. Nick and Shilo Noyes operate the store
          with the help of their staff. We welcome you to drop in and taste the
          bounty of nature. Let us help you find your favorite flavors of honey.
        </p>
        <ShopBtn title="See Our Products" url="/products" />
      </div>
    </div>
    </>
  );
}
