import React, { Fragment, useState } from "react";
import classes from "./ImageCarousel.module.css";
import CarouselButton from "./CarouselButton";

const ImageCarousel = ({ name, images, openModal }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const scrollLeft = () => {
    if (imgIndex === 0) {
      setImgIndex((prevIndex) => prevIndex + images.length - 1);
    } else {
      setImgIndex((prevIndex) => prevIndex - 1);
    }
  };

  const scrollRight = () => {
    if (imgIndex === images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex((prevIndex) => prevIndex + 1);
    }
  };
  console.log(images);
  return (
    <Fragment>
      {images.length > 0 && (
        <div className={classes.carouselContainer}>
          <CarouselButton direction="left" onClick={scrollLeft} />
          <div className={classes.carousel}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name} ${index}`}
                onClick={() => openModal(image)}
                style={{ display: index === imgIndex ? "flex" : "none" }}
              />
            ))}
          </div>
          <CarouselButton direction="right" onClick={scrollRight} />
        </div>
      )}
    </Fragment>
  );
};

export default ImageCarousel;
