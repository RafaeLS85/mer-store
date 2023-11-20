import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";


function TooggleTheme() {
    
    const { colorMode, toggleColorMode } = useColorMode();  

    return (
      <header>
        <span onClick={toggleColorMode} >        
          {
            colorMode === 'light' ?  
            <FaMoon /> :  
            <FaSun />
          }        
        </span>
      </header>
    )
  }

  export default TooggleTheme;