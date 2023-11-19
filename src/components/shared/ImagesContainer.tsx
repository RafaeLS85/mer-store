import { fallback500 } from "@/constants/images";
import { useImages } from "@/hooks/useImages";
import { Flex, IconButton, Image } from "@chakra-ui/react"
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import NextImage from "next/image";

export const ImagesContainer = ({ images, containerProps }: { images: string[], containerProps: any }) => {

 const { imgLength, goNextImg, goPrevImg, imgIndex } = useImages({ images });

 return (
    <Flex {...containerProps}>
        {
        imgLength !== 1 && (               
            <IconButton 
                isRound={true}
                aria-label='previous image' 
                icon={<BiLeftArrowAlt />}            
                colorScheme='blue'
                onClick={goPrevImg} 
                isDisabled={imgIndex === 0}
            />               
        )
        } 
        {
        images[imgIndex] === '' || images[imgIndex] === undefined ? (
        <Image 
            key={images[imgIndex]} 
            src={fallback500}
            height={500}    
            width={500} 
            fallbackSrc={fallback500}
        />
        ) :
        <NextImage
            key={images[imgIndex]} 
            src={images[imgIndex]}
            width={500}
            height={500}
            alt={images[imgIndex]}
        />
        }
        {
        imgLength !== 1 && (               
            <IconButton 
                isRound={true}
                aria-label='next image' 
                icon={<BiRightArrowAlt />} 
                colorScheme='blue'
                onClick={goNextImg}  
                isDisabled={imgIndex === imgLength - 1}
            />              
        )
        } 
    </Flex> 
 )   
}