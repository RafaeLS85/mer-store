import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
  Flex
} from '@chakra-ui/react';
import NextImage from 'next/image';
import { IconButton } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { fallback500 } from '@/constants/images';

interface Props {
  onClose: () => void;
  size: string;
  isOpen: boolean;
  images: string[];
}

export const ModalComponent = ({ onClose, size, isOpen, images }: Props) => {  

  const [imgIndex, setImgIndex] = useState(0);
  const [imgLength] = useState(images.length);
  
  const goNextImg = () => {
    if (imgIndex < imgLength - 1) {
      setImgIndex(imgIndex + 1);
    }
  }

  const goPrevImg = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  } 

  return (      
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent='center' alignItems='center' gap={2}>
              {
                imgLength !== 1 && (               
                    <IconButton 
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
                    aria-label='next image' 
                    icon={<BiRightArrowAlt />} 
                    
                    colorScheme='blue'
                    onClick={goNextImg}  
                    isDisabled={imgIndex === imgLength - 1}
                />              
                )
              } 
            </Flex> 
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  )
}




