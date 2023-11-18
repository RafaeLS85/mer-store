import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image
} from '@chakra-ui/react'
import NextImage from 'next/image';

interface Props {
  onClose: () => void;
  size: string;
  isOpen: boolean;
  images: string[]
}

export const ModalComponent = ({ onClose, size, isOpen, images }: Props) => {  
  return (      
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {
              images.length && images.map((src) => (
                // <Image
                //   key={src} 
                //   src={src} 
                //   // width={600} 
                //   // height={600} 
                //   alt='modal'
                // />
                <NextImage
                  key={src} 
                  src={src}
                  width={500}
                  height={500}
                  alt={src}
                />
              ))
            }
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  )
}




