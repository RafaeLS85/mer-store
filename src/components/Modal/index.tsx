import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import Image from 'next/image'

interface Props {
  onClose: () => void;
  size: string;
  isOpen: boolean;
  image: string
}

export const ModalComponent = ({ onClose, size, isOpen, image }: Props) => {  
  return (      
      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} width={600} height={600}  alt='sarasa'/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>   
  )
}




