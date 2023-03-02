import Image from "next/image";
import { mediaQueryNav } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";
import ShopBtn from "../Navbar/ShopBtn";

interface Props {
  title: string;
  subtitle: string;
  content: string[];
  btn_title: string;
  textLeft?: boolean;
}

export default function Item({
  title,
  subtitle,
  content,
  btn_title,
  textLeft,
}: Props) {
  const isSmallScreen = useMediaQuery(mediaQueryNav);

  const p = {
    fontFamily: "Europa",
    color: "#000000",
    fontSize: "17px",
  };

  const title_style = {
    fontFamily: "Grandma",
    textTransform: "uppercase" as const,
    fontSize: "37px",
    color: "#553605",
    fontWeight: "bold",
    margin: "2.5rem auto",
  };

  const subtitle_style = {
    fontFamily: "Europa",
    textTransform: "uppercase" as const,
    color: "#000000",
    fontSize: "17px",
  };

  const halfWidth = isSmallScreen ? "" : "w-1/2";

  function ImageContainer() {
    return (
      <div className={`${halfWidth} flex `}>
        <Image
          src="https://picsum.photos/400/400"
          alt="who-we-are"
          width={400}
          height={400}
        />
      </div>
    );
  }

  if(isSmallScreen) textLeft = false

  return (

    <div className="flex p-6">    
      {!textLeft && <ImageContainer />}

      <div className={`${halfWidth}`}>
        <h1 style={title_style}> {title} </h1>
        <h3 style={subtitle_style}>
          <strong>{subtitle}</strong>
        </h3>
        {content.map((paragraph, i) => (
          <p style={p} key={i}>
            {paragraph}
          </p>
        ))}
        <div className="my-6">
          <ShopBtn title={btn_title} />
        </div>
      </div>
      {textLeft && <ImageContainer />}
    </div>
  );
}
