import { useState } from "react";
import { projectList } from "./project_list";
import ModalImage from "./ModalImage";

import classes from "./Projects.module.css";
import ImageCarousel from "./ImageCarousel";
const Projects = () => {
  const [modalImage, setModalImage] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const mappedList = projectList.map((project) => {
    let description = project.description;
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
      <li id={project.id} key={project.id}>
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
        <ImageCarousel
          name={project.name}
          images={project.images}
          openModal={openModal}
        />
        <p>{description}</p> {readMoreButton}
        {showLessButton}
      </li>
    );
  });

  return (
    <div className={classes.myProjects}>
      <ul>{mappedList}</ul>
      {modalImage && (
        <ModalImage modalImage={modalImage} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
