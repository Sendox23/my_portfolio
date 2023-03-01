import { useState } from "react";
import { projectList } from "./project_list";
import ModalImage from "./ModalImage";

import classes from "./Projects.module.css";
import ImageCarousel from "./ImageCarousel";
const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const scrollLeft = (e, carousel) => {
    e.stopPropagation();
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = (e, carousel) => {
    e.stopPropagation();
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  };

  const mappedList = projectList.map((project) => {
    return (
      <li id={project.id} key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={classes.projectLinks}>
          {project.gitLink && (
            <a href={project.gitLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.websiteLink && (
            <a href={project.websiteLink} target="_blank" rel="noreferrer">
              Link
            </a>
          )}
        </div>
        <ImageCarousel
          name={project.name}
          img={project.img}
          openModal={openModal}
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />
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
