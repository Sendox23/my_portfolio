import React from "react";
import classes from "./ImageCarousel.module.css";

const ImageCarousel = ({ name, img, openModal, scrollLeft, scrollRight }) => {
  return (
    <div className={classes.carouselContainer}>
      <button
        className={`${classes.carouselButton} ${classes.carouselButtonLeft}`}
        onClick={(e) =>
          scrollLeft(
            e,
            e.target.parentNode.querySelector(`.${classes.carousel}`)
          )
        }
      >
        &#8249;
      </button>
      <div className={classes.carousel}>
        {img.map((image, imgIndex) => (
          <img
            key={imgIndex}
            src={image}
            alt={`${name} ${imgIndex}`}
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      <button
        className={`${classes.carouselButton} ${classes.carouselButtonRight}`}
        onClick={(e) =>
          scrollRight(
            e,
            e.target.parentNode.querySelector(`.${classes.carousel}`)
          )
        }
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageCarousel;