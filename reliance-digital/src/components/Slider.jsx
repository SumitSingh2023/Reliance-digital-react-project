
import { Box, Button, Image } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Slider = ({ image }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % image.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + image.length) % image.length);
  };

  useEffect(() => {
   
    const interval = setInterval(() => {
        prevImage();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentImage]);



  return (
    <Box position='relative' >

      <Button style={{position:"absolute",
        left:"0",
        top:"50%",
        width:"40px",
        height:"100px",
        background:"white",
        opacity:"0.6",
        cursor:"pointer",
        borderStyle:"none",
        transform:"translateY(-50%)"}} 
         onClick={prevImage}>
            <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:"25px"}}/>
      </Button>

      <Image style={{width:"100%",height:"240px",marginTop:"5px"}} src={image[currentImage]} alt={`Slide ${currentImage + 1}`} />

      <Button style={{position:"absolute",
        right:"0",
        top:"50%",
        width:"40px",
        height:"100px",
        background:"white",
        opacity:"0.6",
        cursor:"pointer",
        borderStyle:"none",
        transform:"translateY(-50%)"}}  
        onClick={nextImage}>

            <FontAwesomeIcon icon={faChevronRight} style={{fontSize:"25px"}}/>
       
      </Button>
    </Box>
  );
};




export default Slider;
