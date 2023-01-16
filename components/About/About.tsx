import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import BannerImage from "../Home/BannerImage";
import HeaderSection from "../Home/HeaderSection";
import History from "./History";

export default function AboutPage() {
  return (
    <>
      <HeaderSection url="/honey2.jpg" title="About us" />
      <History />
      <BannerImage url="/honey-banner.jpg" />   
      <Contact />
      <Footer />
    </>
  );
}
