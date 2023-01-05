import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MenuContext } from '../context/MenuContext'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [show, setShow] = useState(false)


  return (
    <MenuContext.Provider value={{show, setShow}}>
      <Component {...pageProps} />
    </MenuContext.Provider>
  )
}
