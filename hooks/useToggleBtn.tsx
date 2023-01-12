import { useContext, useEffect, useState } from "react";
import { mediaQueryNav } from "../constants/config";
import { MenuContext } from "../context/MenuContext";
import useMediaQuery from "./useMediaQuery"

export default function useToggleBtn(){

    const [expanded, setExpanded] = useState (false);
    const matches = useMediaQuery(mediaQueryNav)
    const { show, setShow } = useContext(MenuContext);

    useEffect(() => {
      if(!matches) {
        setShow(false)
        if(!show) setExpanded(false);
      }
    }, [matches, show, setShow, setExpanded, expanded])

    return { expanded, setExpanded }

}