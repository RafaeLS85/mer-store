import { FaInstagramSquare } from "react-icons/fa";
import useMediaQuery from "../../hooks/useMediaQuery";
import { mediaQueryMobile } from "../../constants/config";
import ShopBtn from "../Navbar/ShopBtn";

export default function Contact() {
  const isMobile = useMediaQuery(mediaQueryMobile);

  const title = {
    paddingTop: "2rem",
    fontFamily: "Grandma",
    fontSize: isMobile ? "27px" : "38px",
    textAlign: "center" as const,
    fontWeight: "bold",
    whiteSpace: "pre-wrap" as const,
    textTransform: "uppercase" as const,
  };

  const subtitle = {
    fontFamily: "Europa",
    fontSize: isMobile ? "16px" : "17px",
    margin: "5px 12px",
    alignSelf: "center",
  };

  const inputStyles = {
    margin: "0.5rem",
    padding: " 1.4rem 2rem",
    lineHeight: "1.2rem",
  };

  const inputClass = "bg-[#FFFFFF] rounded";

  return (
    <div className="bg-[#553605] text-center">
      <h3 style={title}>SUBSCRIBE</h3>
      <h4 style={subtitle}>
        Sign up with your email address to receive news and updates.
      </h4>

      <form action="" className="flex justify-center flex-wrap">
        <input
          type="text"
          placeholder="Name"
          className={`${inputClass}`}
          style={inputStyles}
        />
        <input
          type="text"
          placeholder="Last Name"
          className={`${inputClass}`}
          style={inputStyles}
        />
        <input
          type="email"
          placeholder="Email"
          className={`${inputClass}`}
          style={inputStyles}
        />
      </form>

      <div className="p-6">
        <ShopBtn title="SEND" />
      </div>
    </div>
  );
}
