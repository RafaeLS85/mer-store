import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

interface Props {
  headerCss: {
    header: {};
  };
}

export const Navbar = ({ headerCss }: Props) => {
 

  return (
    <header style={Object.assign(headerCss.header)}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo-example2.png"
              width={150}
              height={50}
              alt="logo"
            />
          </Link>
        </div>

        <div style={{ display: "flex", gap: "12px", color: "black" }}>
          <div>Login</div>
          <div>Logout</div>
          <div>
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
};
