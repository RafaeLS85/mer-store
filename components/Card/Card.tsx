import { CardItem } from "./CardContainer";

export default function Card(item: CardItem) {
  const { title, image, path } = item;

  const styles = {
    button: {
      fontFamily: "Grandma",
      backgroundColor: "#F2AB10",
      color: "#FFF",
      width: "100%",
      fontSize: "37px",
      textAlign: "center",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
      padding: '1rem'
    },
  };

  const handleClick = (url: string | undefined) => {
    console.log("click", url);
  };

  return (
    <div className="cursor-pointer" onClick={() => handleClick(path)}>
      <img src={image} alt={title} />
      <div style={Object.assign(styles.button)}>{title}</div>
    </div>
  );
}
