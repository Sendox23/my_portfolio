import Slider from "react-slick"; // import Slider component from react-slick library

import { sliderSettings  } from "../../resources/slider_settings.js";
import classes from "./SlickCarousel.module.css";

const SlickCarousel = ({ images }) => {

  return (
    <div className={classes.carouselContainer}>
      <Slider {...sliderSettings}>
        {/* map through the images and create a slide for each */}
        {images.map((image, index) => (
          <div key={index} index={index} className={classes.carousel}>
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickCarousel;
