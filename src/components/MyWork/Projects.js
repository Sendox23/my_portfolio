import { useState } from "react";
import SlickCarousel from "./SlickCarousel";

import { projectList } from "./project_list";

import classes from "./Projects.module.css";

const Projects = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const mappedList = projectList.map((project) => {
    let description = project.description;
    let images = project.images;
    let readMoreButton = null;
    let showLessButton = null;

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
      description = project.description;
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
      <li className={classes.projectContainer} id={project.id} key={project.id}>
        <h3>{project.name}</h3>
        <div className={classes.projectLinks}>
          {project.gitLink && (
            <a href={project.gitLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noreferrer">
              Website
            </a>
          )}
        </div>
        <SlickCarousel images={images} />
        <p>{description}</p> {readMoreButton}
        {showLessButton}
      </li>
    );
  });

  return (
    <div className={classes.myProjects}>
      <ul>{mappedList}</ul>
    </div>
  );
};

export default Projects;
