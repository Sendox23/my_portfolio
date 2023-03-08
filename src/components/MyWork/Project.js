import SlickCarousel from "./SlickCarousel";

import classes from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({ name, id, description, images, gitLink, websiteLink}) => {

  return (
    <li className={classes.projectContainer} id={id} key={id}>
      <h3>{name}</h3>

      <SlickCarousel images={images} />
      <Link
        to={`/my-work/${id}`}
        state={{ name, id, description, images, gitLink, websiteLink }}
      >
        View More Details
      </Link>
    </li>
  );
};

export default Project;
