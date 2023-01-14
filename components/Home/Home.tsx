import Image from "next/image";
import CardContainer, { CardItem } from "../Card/CardContainer";
import BannerImage from "./BannerImage";
import HeaderSection from "./HeaderSection";
import HeaderTitle from "./HeaderTitle";
import ShopButton from "./ShopButton";
import WhoWeAre from "./WhoWeAre";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function HomePage() {
  const cards: CardItem[] = [
    {
      id: "1",
      title: "Honey",
      image: "https://picsum.photos/300/300",
      path: "/honey",
    },
    {
      id: "2",
      title: "Beauty",
      image: "https://picsum.photos/300/300",
      path: "/beauty",
    },
    {
      id: "3",
      title: "Beeswax",
      image: "https://picsum.photos/300/300",
      path: "/beeswax",
    },
  ];

  return (
    <>
      <HeaderSection />
      <HeaderTitle title="What We Offer" />
      <CardContainer cards={cards} />
      <ShopButton title="SHOP ONLINE" />
      <WhoWeAre />
      <BannerImage />   
      <Contact />
      <Footer />  
    </>
  );
}
