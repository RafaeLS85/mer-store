import React from "react";

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
        }}
      >
        Footer
      </div>
    </footer>
  );
};
