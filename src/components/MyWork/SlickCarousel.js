import Slider from "react-slick";

import classes from "./SlickCarousel.module.css";
const SlickCarousel = ({ images }) => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div

        style={{
          background: "radial-gradient(white, var(--gold))",
          maxHeight: "2rem",
          position: "absolute", // add this to position the dot bar relative to the carousel container
          bottom: "-.8rem", // add this to position the dot bar at the bottom of the carousel container
          left: "50%", // add this to center the dot bar horizontally
          transform: "translateX(-50%)", // add this to center the dot bar horizontally
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center", // add this to center the dots horizontally
            alignItems: "center", // add this to center the dots vertically
            height: "100%",
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.carouselContainer}>
      <Slider {...settings}>
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
