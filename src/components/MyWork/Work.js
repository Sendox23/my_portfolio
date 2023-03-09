import SlickCarousel from "./SlickCarousel";

import classes from "./Work.module.css";
import { Link } from "react-router-dom";

const Work = ({ name, id, description, images, gitLink, websiteLink }) => {
  if (images[0]) {
    console.log(images[0].url);
  }
  return (
    <li className={classes.workContainer} id={id} key={id}>
      <h3>{name}</h3>
      {images[0] && <img src={images[0].url} alt={images[0].alt}/>}
      <Link
        to={`/my-work/${id}`}
        state={{ name, id, description, images, gitLink, websiteLink }}
        onClick={() => window.scrollTo(0, 0)}
      >
        View Details
      </Link>
    </li>
  );
};

export default Work;
