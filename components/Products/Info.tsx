import { mediaQueryNav } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Info() {
  const isSmallScreen = useMediaQuery(mediaQueryNav);

  const p = {
    fontFamily: "Europa",
    color: "#553605",
    fontSize: "17px",
    margin: "1rem",
  };

  const h4 = {
    fontFamily: "Grandma",
    color: "#553605",
    fontWeight: "bold",
    fontSize: "24px",
    margin: "1rem",
  };

  const w50 = isSmallScreen ? "" : "w-1/2";

  return (
    <>
      <div className="flex p-6  flex-wrap bg-[#EAD1A4] ">
        <div className={`${w50} `}>
          <p style={p}>
            Work. School. Family activities. Chores. Everyone seems to be
            `&quote`busy as a bee`&quote` these days. Yet, despite the hectic schedules,
            American Families like the Noyes, are committed to providing their
            families with delicious and nutritious meals. We encourage you to
            keep a honey jar or squeeze bear within easy reach on the kitchen
            counter or table. That way, you`&apos`ll never forget to use honey when
            you`&apos`re busy as a bee and need a little sweetness and a lot of
            flavor.
          </p>
        </div>

        <div className={`${w50} `}>
          <h4 style={h4}>
            ADD THE GOLDEN TOUCH OF HONEY TO ORDINARY, STORE-BOUGHT AND
            CONVENIENCE FOODS TO ADD SWEETNESS, FLAVOR AND VARIETY.
          </h4>
        </div>
      </div>
    </>
  );
}
