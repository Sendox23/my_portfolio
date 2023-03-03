
import classes from "./ImageCarousel.module.css";

const CarouselButton = ({ direction, onClick }) => {
  const buttonClass = direction === "left" ? classes.carouselButtonLeft : classes.carouselButtonRight;
  return (
    <button
      className={`${classes.carouselButton} ${buttonClass}`}
      onClick={onClick}

    >
      {direction === "left" ? <p>&#8249;</p> : <p> &#8250;</p>}
    </button>
  );
};

export default CarouselButton;