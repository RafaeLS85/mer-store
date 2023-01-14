import { mediaQueryMobile } from "../../constants/config";
import useMediaQuery from "../../hooks/useMediaQuery";

interface Props {
    title: string
}

export default function HeaderTitle({title}: Props  ) {

    const isMobile = useMediaQuery(mediaQueryMobile)

    const styles = {
      title: {
          fontFamily: 'Grandma',
          fontSize: isMobile ? '38px':'54px',
          textAlign:'center',
          fontWeight: 'bold',
          color: '#553605',          
          whiteSpace:'pre-wrap',
          textTransform: 'uppercase'
      }
    }  

    return (
        <div className={`${isMobile ? 'mt-14' : 'm-14'}`}>
            <h2 style={Object.assign(styles.title)}>{title}</h2>
        </div>
    );
  }
  