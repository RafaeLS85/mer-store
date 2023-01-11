import Card from "./Card";

export interface CardItem {
  id: string;
  title: string;
  image: string;
  path?: string;
}

interface Props{
    cards: CardItem[]
}

const CardContainer = ({cards} : Props ) => {
    // console.log(cards)
  return (
    <div className="flex gap-6 justify-center flex-wrap p-6">
      {cards.map((card) => (
        <div key={card.id} >
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
