// import Image from "next/image";

export default function BannerImage() {
  return (
    <div  className="">
      {/* <Image
        src="/honey2.jpg"
        alt="banner-img"
        sizes='100vw'
        width={100}
        height={100}
        
      /> */}
      <img src="/honey-banner.jpeg" alt="banner-img" style={{width: '100%', height: '100%' }} />
    </div>
  );
}
