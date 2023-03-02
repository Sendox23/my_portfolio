import React, { useState } from "react";
import classes from "./ImageCarousel.module.css";
import CarouselButton from "./CarouselButton";

const ImageCarousel = ({ name, img, openModal }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const scrollLeft = () => {
    setImgIndex((prevIndex) => prevIndex - 1);
  };

  const scrollRight = () => {
    setImgIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className={classes.carouselContainer}>
      {imgIndex > 0 && (
        <CarouselButton
          direction="left"
          onClick={scrollLeft}
        />
      )}
      <div className={classes.carousel}>
        {img.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name} ${index}`}
            onClick={() => openModal(image)}
            style={{ display: index === imgIndex ? "flex" : "none" }}
          />
        ))}
      </div>
      {imgIndex < img.length - 1 && (
        <CarouselButton
          direction="right"
          onClick={scrollRight}
        />
      )}
    </div>
  );
};

export default ImageCarousel;



