import { useState } from "react";
import PageContent from "../Layout/PageContent";
import SlickCarousel from "./SlickCarousel";

import classes from "./WorkDetails.module.css";

const WorkDetails = ({ state, title }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = state.description;
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
    <PageContent title={state.name}>
      <div className={classes.projectDetails}>
        <SlickCarousel images={state.images} />{" "}
        <div className={classes.projectLinks}>
          <h3>View on</h3>
          {state.gitLink && (
  
              <a href={state.gitLink} target="_blank" rel="noreferrer">
                GitHub
              </a>
 
          )}
          {state.websiteLink && (
 
              <a href={state.websiteLink} target="_blank" rel="noreferrer">
                Website
              </a>
      
          )}
          <div className={classes.description}>
            <p>{description}</p> {readMoreButton}
            {showLessButton}
          </div>
          <div className={classes.divBar}></div>
        </div>
        <h1>{title}</h1>
      </div>
    </PageContent>
  );
};
export default WorkDetails;
