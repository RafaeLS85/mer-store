import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle = {
    margin: "1rem",
    color: "black",
  };

  return (
    <footer className="bg-[#553605] text-center py-14">
      <span className="flex justify-center">
        <FaInstagramSquare size={30} style={iconStyle} />
        <FaFacebookSquare size={30} style={iconStyle} />
        <FaWhatsappSquare size={30} style={iconStyle} />
      </span>
    </footer>
  );
}
