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
import { useImages } from '@/hooks/useImages';
import { ImagesContainer } from '../ImagesContainer';

interface Props {
  onClose: () => void;
  size: string;
  isOpen: boolean;
  images: string[];
}

export const ModalComponent = ({ onClose, size, isOpen, images }: Props) => {    
  
  const containerProps = {
    justifyContent:'center',
    alignItems:'center',
    gap: 2
  }

  return (      
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ImagesContainer images={images} containerProps={containerProps} />           
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  )
}




