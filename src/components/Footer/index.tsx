import { PHONE_NUMBER } from "@/constants/config";
import { Container, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import packageData from "../../../package.json";

interface Props {}

const Version = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "12px",
      }}
    >
      {packageData.version}
    </div>
  );
};

export const Footer = ({}: Props) => {
  const text = "Hola, quisiera consultar acerca de los productos de la tienda";
  const { colorMode, toggleColorMode } = useColorMode();  

  return (
    <Container maxW="6xl" bg={ colorMode === "dark" ? "#2D3748" : "white"} >
      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            height: "100%",
            gap: "1rem",
            paddingTop: "1rem",
          }}
        >
          <Link href="https://www.facebook.com/pacaratejidos/" target="_blank">
            <AiFillFacebook size={25} />
          </Link>
          <Link
            href="https://www.instagram.com/pacara.tejidos/"
            target="_blank"
          >
            <AiFillInstagram size={25} />
          </Link>
          <Link
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
              text
            )}`}
            target="_blank"
          >
            <IoLogoWhatsapp size={25} />
          </Link>
        </div>
        <Version />
      </footer>
    </Container>
  );
};
