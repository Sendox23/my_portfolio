import { useState } from "react";
import SlickCarousel from "./SlickCarousel";

import classes from "./Projects.module.css";

const Projects = ({ name, id, description, images, gitLink, websiteLink }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let readMoreButton = null;
  let showLessButton = null;
  const longDescription = description;

  if (description.length > 150 && !showFullDescription) {
    description = description.substring(0, 150);
    readMoreButton = (
      <button
        className={classes.showMoreButton}
        onClick={() => setShowFullDescription(true)}
      >
        ...Read More
      </button>
    );
  } else if (description.length > 150 && showFullDescription) {
    description = longDescription;
    showLessButton = (
      <button
        className={classes.showLessButton}
        onClick={() => setShowFullDescription(false)}
      >
        Read Less
      </button>
    );
  }

  return (
    <li className={classes.projectContainer} id={id} key={id}>
      <h3>{name}</h3>
      <div className={classes.projectLinks}>
        {gitLink && (
          <a href={gitLink} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {websiteLink && (
          <a href={websiteLink} target="_blank" rel="noreferrer">
            Website
          </a>
        )}
      </div>
      <SlickCarousel images={images} />
      <p>{description}</p> {readMoreButton}
      {showLessButton}
    </li>
  );
};

export default Projects;
