import { useContext, useEffect } from "react";
import { mediaQueryNav } from "../constants/config";
import { MenuContext } from "../context/MenuContext";
import useMediaQuery from "./useMediaQuery"

export default function useToggleBtn(onMobile?: boolean){
    
    const matches = useMediaQuery(mediaQueryNav)
    const { show, setShow, expanded, setExpanded } = useContext(MenuContext);

    useEffect(() => {
        if(!matches && !onMobile ) {
          setShow(false)
          if(!show) setExpanded(false);
        } 
    // eslint-disable-next-line react-hooks/exhaustive-deps      
    }, [matches, show, setShow, setExpanded, expanded])

    return { expanded, setExpanded, setShow }

}