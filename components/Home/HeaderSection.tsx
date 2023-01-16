import { mediaQueryMobile } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
  url: string;
  title: string;
  subtitle?: string;
}

export default function HeaderSection({ url, title, subtitle }: Props) {
  const isMobile = useMediaQuery(mediaQueryMobile);

  const styles = {
    background: {
      backgroundImage: `url('${url}')`,
      height: !isMobile ? "100vh" : null,
      backgroundSize: !isMobile ? "100%" : "cover",
    },
    title: {
      fontFamily: "Grandma",
      fontSize: isMobile ? "40px" : "60px",
      margin: isMobile ? "2rem" : "auto 2rem",
      textAlign: "center",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
    },
    subtitle: {
      fontFamily: "Europa",
      fontSize: isMobile ? "19px" : "21px",
      padding: "2rem",
      textAlign: "center",
      fontWeight: "bold",
      whiteSpace: "pre-wrap",
      textTransform: "uppercase",
    },
  };

  return (
    <div
      className="flex flex-col justify-center"
      style={Object.assign(styles.background)}
    >
      <div className="text-center self-center">
        <h1 style={Object.assign(styles.title)}>{title}</h1>
      </div>
      {subtitle && (
        <p style={Object.assign(styles.subtitle)}>
          <strong>{subtitle}</strong>
        </p>
      )}
    </div>
  );
}
