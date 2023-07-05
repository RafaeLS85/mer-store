import React from "react";
import {AiFillFacebook, AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

interface Props {
  footerCss: {
    footer: {};
  };
}

export const Footer = ({ footerCss }: Props) => {
  return (
    <footer style={Object.assign(footerCss.footer)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          height: '100%'
        }}
      >
        <AiFillFacebook />
        <AiFillInstagram />
        <IoLogoWhatsapp />
      </div>
    </footer>
  );
};
