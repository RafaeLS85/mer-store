import { mediaQueryMobile } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function HeaderSection() {

  const isMobile = useMediaQuery(mediaQueryMobile)

  const styles = {
    background: {
        backgroundImage: `url('/honey3.jpg')`, 
        height: !isMobile ? '100vh' : null,
        backgroundSize: !isMobile ? '100%' : 'cover',


    },
    title: {
        fontFamily: 'Grandma',
        fontSize: isMobile ? '40px' : '60px',
        margin: isMobile? '2rem' : 'auto 2rem',
        textAlign:'center',
        fontWeight: 'bold',
        whiteSpace:'pre-wrap',
        textTransform: 'uppercase'
    },
    subtitle: {
        fontFamily: 'Europa',
        fontSize: isMobile ? '19px' : '21px',
        padding: '2rem',
        textAlign:'center',
        fontWeight: 'bold',
        whiteSpace:'pre-wrap',
        textTransform: 'uppercase'
    }
  }  

  return (
    <div className="flex flex-col justify-center" style={Object.assign(styles.background)}>
      <div className="text-center self-center">
        <h1 style={Object.assign(styles.title)} >
          Join our Family &amp; Enjoy Natures Finest
        </h1>
      </div>
      <p style={Object.assign(styles.subtitle)}>
        <strong>NATURALLY PRODUCED HONEY &amp; BEE PRODUCTS</strong>
      </p>
    </div>
  );
}
