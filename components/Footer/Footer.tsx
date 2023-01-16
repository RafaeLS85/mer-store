import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const iconStyle = {
    margin: "1rem",
  };

  return (
    <footer className="bg-[#553605] text-center py-14">
      <span className="flex justify-center">
        <FaInstagram size={30} style={iconStyle} />
        <FaFacebookF size={30} style={iconStyle} />
        <FaWhatsapp size={30} style={iconStyle} />
      </span>
    </footer>
  );
}
