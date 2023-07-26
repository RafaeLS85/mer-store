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
          height: '100%',
          gap: '1rem' 
        }}
      >
        <AiFillFacebook  size={25}/>
        <AiFillInstagram size={25}/>
        <IoLogoWhatsapp size={25}/>
      </div>
      <div  style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          fontSize: "12px",
          
        }}>
        v1.4.2
      </div>
    </footer>
  );
};
