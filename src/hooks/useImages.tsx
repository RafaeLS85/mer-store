import { useState } from "react";

export const useImages = ({ images }: { images: string[] }) => {
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

    return {
      imgIndex,
      imgLength,
      goNextImg,
      goPrevImg
    }
}