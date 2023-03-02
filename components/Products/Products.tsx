import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HeaderSection from "../Home/HeaderSection";
import Info from "./Info";
import Item from "./Item";

export default function ProductsPage() {

  type Products = {
    id: number,
    title: string,
    subtitle: string,
    content: string[],
    textLeft: boolean,
    btn_title: string,
  }

  const data: Products[] = [
    {
      id: 1,
      title: "RAW HONEY",
      subtitle: "RAW | COMB | CREAMED | STIX",
      content: [
        `Most of us know honey as a sweet, golden liquid. But, in fact, honey can be found in a variety of forms. 
            Comb honey is honey that comes as it was produced — in the honey beeswax comb. 
            The comb, as well as the honey, is edible! Cut comb honey is liquid honey that has added chunks of the honey comb in the jar. 
            Also known as liquid-cut comb combination. Free of visible crystals, liquid honey is extracted from the honey comb by centrifugal force, 
            gravity or straining. Because liquid honey mixes easily into a variety of foods, it's especially convenient for cooking and baking. 
            Most of the honey produced in the United States is sold in the liquid form. While all honey will crystallize in time, 
            Creamed honey (also known as whipped honey or spun honey) is brought to market in a crystallized state. 
            The crystallization is controlled so that, at room temperature, the honey can be spread like butter. 
            In many countries around the world, creamed honey is preferred to the liquid form.`,
      ],
      textLeft: false,
      btn_title: "SHOP HONEY",
    },
    {
      id: 2,
      title: "BEESWAX",
      subtitle: "BLOCK | CANDLES",
      content: [
        `Beeswax is one of nature's most amazing products! Our Beewax is harvested straight from our bees and are 100% pure, natural and free of additives. 
         Our candles are hand poured by our " worker Bees ". The wicks are 100% cotton and burn 3 times longer.`,
      ],
      textLeft: true,
      btn_title: "SHOP Beeswax",
    },
    {
      id: 3,
      title: "BEAUTY",
      subtitle: "LIP BALM | LOTION | SOAP | SPRAYS",
      content: [
        `All beauty products are made in "hive” by our "worker bees”. Beeswax is moisturizing, antibacterial, 
        antioxidant and an anti-inflammatory. It won't clog pores, it is a good source of Vitamin A.
        and can help reduce itching associated with dry skin. 
        Our lip balm and lotion bars are made with our own 100% pure beeswax. 
        All of our products are made with simple natural ingredients for people with sensitive skin.  
        `,
      ],
      textLeft: false,
      btn_title: "SHOP BEAUTY",
    },
    {
      id: 4,
      title: "CANDY",
      subtitle: "ASSORTED HONEY | BIT-O-HONEY | SESAME HONEY",
      content: [
        `Everyone loves Bit-O-Honey candies and many even remember having them as kids. Our Honey Sesame candy are a delicious crunchy combination of honey and sesame seeds in a bite sized bar (and are my personal favorite). 
         We also offer assorted honey candies which have a hard candy shell with a honey filled center. Flavors include: Lemon, Cherry, Apple, Grape, Orange and Honey. 
         They are great for road trips or just as a little treat!`,
      ],
      textLeft: true,
      btn_title: "SHOP CANDY",
    },
  ];

  return (
    <>
      <HeaderSection url="/honey4.jpg" title="Our Products" />
      <Info />
      <div className="container mx-auto">
        {data.map(({id,title, subtitle, textLeft, content, btn_title}) => (
          <Item
            key={id}
            title={title}
            subtitle={subtitle}
            textLeft={textLeft}
            content={content}
            btn_title={btn_title}
          />
        ))}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
