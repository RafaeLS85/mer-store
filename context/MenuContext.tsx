import { createContext } from 'react'
interface MenuContextInterface {
    show: boolean;
    setShow: (flag:boolean) => void
  }
export const  MenuContext = createContext<MenuContextInterface>({show: false, setShow: () => {}})