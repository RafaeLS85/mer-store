import CardContainer, { CardItem } from "../Card/CardContainer";
import HeaderSection from "./HeaderSection";
import HeaderTitle from "./HeaderTitle";

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
    </>
  );
}
