import { useRouter } from "next/router";

interface Props {
  title: string;
  url?: string;
}

export default function ShopBtn({ title, url = "" }: Props) {
  const router = useRouter();

  return (
    <button
      style={{
        backgroundColor: "#F1AB13",
        color: "white",
        padding: "1em 1.67em",
        borderRadius: "30px",
        fontSize: "calc((1 - 1) * 1.2vw + 1rem)",
      }}
      onClick={() => router.push(url)}
    >
      {title}
    </button>
  );
}
