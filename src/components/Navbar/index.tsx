// import { useCart } from "@/hooks/useCart";
import { useChartStore } from "../../store/store";
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
  const { products } = useChartStore();

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

        <div
          style={{
            display: "flex",
            gap: "12px",
            color: "black",
            marginRight: "1rem",
          }}
        >
          {/* <div>Login</div>
          <div>SignUp</div> */}
          <div
            style={{
              opacity: Boolean(products.length) ? "1" : "0.5",
              pointerEvents: Boolean(products.length) ? "unset" : "none",
            }}
          >
            <Link href="/checkout">
              <div
                style={{
                  display: "flex",
                }}
              >
                <FiShoppingCart size={25} style={{ marginRight: "10px" }} />
                <p style={{ marginRight: "10px" }}>Mi pedido</p>

                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    background: "lightgray",
                    borderRadius: "100%",
                    width: "24px",
                    color: "blue",
                    fontWeight: "bolder",
                  }}
                >
                  {products.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
