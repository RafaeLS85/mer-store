import { Container } from "@chakra-ui/react";
import { useChartStore } from "../../store/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

export const Navbar = () => {
  const { chart } = useChartStore();

  return (
    <header>
      <Container
        maxW="6xl"
        bg="#2D3748"
        centerContent
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        paddingTop="0.5rem"
        paddingBottom="0.5rem"
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
          <div
            style={{
              opacity: Boolean(chart.length) ? "1" : "0.5",
              pointerEvents: Boolean(chart.length) ? "unset" : "none",
            }}
          >
            <Link href="/checkout">
              <div
                style={{
                  display: "flex",
                }}
              >
                <FiShoppingCart size={25} style={{ marginRight: "10px" }} />
                <p style={{ marginRight: "10px"}}>Mi pedido</p>

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
                  {chart.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
