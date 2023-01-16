import { createContext } from 'react'
interface MenuContextInterface {
    show: boolean;
    setShow: (flag:boolean) => void
    expanded: boolean;
    setExpanded: (flag:boolean) => void
  }
export const  MenuContext = createContext<MenuContextInterface>({
  show: false, 
  setShow: () => {},
  expanded: false, 
  setExpanded: () => {}
})