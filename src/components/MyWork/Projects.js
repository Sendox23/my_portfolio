import reactMeetup from "../../resources/react-meetups-project.png";
import reactMeetup2 from "../../resources/react-meetups-project-2.png";

import classes from "./Projects.module.css";
import { useState } from "react";

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const PROJECT_LIST = [
    {
      name: "Spotify Playlist",
      id: "p1",
      description: "",
      img: [],
      gitLink: "",
    },
    {
      name: "Fantasy Football",
      id: "p2",
      description: "",
      img: [],
      gitLink: "",
    },
    { name: "Food Order App", id: "p3", description: "", img: [], gitLink: "" },
    {
      name: "React Meetups",
      id: "p4",
      description: "",
      img: [reactMeetup, reactMeetup2],
      gitLink: "https://github.com/Sendox23/React-Meetups",
      websiteLink: "https://react-meetups-project5.netlify.app/",
    },
  ];
  const mappedList = PROJECT_LIST.map((project, index) => {
    return (
      <li id={project.id} key={index}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={classes.carousel}>
          {project.img.map((image, imgIndex) => (
            <img
              key={imgIndex}
              src={image}
              alt={`${project.name} ${imgIndex}`}
              onClick={() => openModal(image)}
            />
          ))}
        </div>
      </li>
    );
  });

  return (
    <div className={classes.myWork}>
      <h2>My Work</h2>
      <ul>{mappedList}</ul>
      {modalImage && (
        <div className={classes.modal} onClick={closeModal}>
          <img src={modalImage} alt="full-screen" />
        </div>
      )}
    </div>
  );
};

export default Projects;
