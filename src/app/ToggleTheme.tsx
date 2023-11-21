import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";


function TooggleThemeBtn() {
    
    const { colorMode, toggleColorMode } = useColorMode();  

    return (
      <header>
        <span onClick={toggleColorMode} >        
          {
            colorMode === 'light' ?  
            <FaMoon color="#444444" size={22}   /> :  
            <FaSun color="white" size={25} />
          }        
        </span>
      </header>
    )
  }

  export default TooggleThemeBtn;