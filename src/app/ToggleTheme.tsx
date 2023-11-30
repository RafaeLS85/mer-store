import { Button, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa";


function TooggleThemeBtn() {
    
    const { colorMode, toggleColorMode } = useColorMode();  

    return (
      <header> 
        {/* {
          colorMode === 'light' ? (
            <IconButton
              onClick={toggleColorMode}
              variant='outline'
              colorScheme='cyan'
              
              border="transparent"
              aria-label='Modo oscuro'
              icon={<FaMoon color="#ffffff" size={22} title="Modo oscuro"  /> }
            />
          ) : (
            <IconButton
              onClick={toggleColorMode}
              variant='outline'
              colorScheme='teal'
              border="transparent"
              aria-label='Modo claro'
              icon={ <FaSun color="#ffffff" size={25} title="Modo claro" />}
            />            
          )
        } */}
         <span onClick={toggleColorMode} style={{ cursor: 'pointer' }} >        
          {
            colorMode === 'light' ?  
            <FaMoon color="white" size={22}   /> :  
            <FaSun color="white" size={25} />
          }        
        </span>
      </header>
    )
  }

  export default TooggleThemeBtn;