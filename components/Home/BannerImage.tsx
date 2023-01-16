
interface Props {
  url: string
}

export default function BannerImage({url}: Props) {
  return (
    <div  className="">
      <img src={url} alt="banner-img" style={{width: '100%', height: '100%' }} />
    </div>
  );
}
