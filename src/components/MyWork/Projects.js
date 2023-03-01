import { useState, useMemo, useCallback } from "react"; // import useState, useMemo, and useCallback
import { projectList } from "./project_list"; // import the projectList array
import classes from "./Projects.module.css"; // import the CSS module

const Projects = () => {
  const [modalImage, setModalImage] = useState(null); // use state to keep track of the modal image

  const openModal = useCallback((image) => { // memoize the openModal function using useCallback
    setModalImage(image);
  }, []);

  const closeModal = useCallback(() => { // memoize the closeModal function using useCallback
    setModalImage(null);
  }, []);

  const scrollLeft = useCallback((e, carousel) => { // memoize the scrollLeft function using useCallback
    e.stopPropagation();
    carousel.scrollBy({
      left: -carousel.offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const scrollRight = useCallback((e, carousel) => { // memoize the scrollRight function using useCallback
    e.stopPropagation();
    carousel.scrollBy({
      left: carousel.offsetWidth,
      behavior: "smooth",
    });
  }, []);

  const mappedList = useMemo(() => { // memoize the mappedList variable using useMemo
    return projectList.map((project) => { // map over the projectList array to create a list of projects
        const { id, name, description, img, gitLink, websiteLink } = project; // use object destructuring to simplify code
        return (
          <li id={id} key={id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={classes.projectLinks}>
              {gitLink && (
                <a href={gitLink} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {websiteLink && (
                <a href={websiteLink} target="_blank" rel="noreferrer">
                  Link
                </a>
              )}
            </div>
            <div className={classes.carouselContainer}>
              <button
                className={`${classes.carouselButton} ${classes.carouselButtonLeft}`}
                onClick={(e) =>
                  scrollLeft(
                    e,
                    e.target.parentNode.querySelector(`.${classes.carousel}`)
                  )
                }
              >
                &#8249;
              </button>
              <div className={classes.carousel}>
                {img.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`${name} ${imgIndex}`}
                    onClick={() => openModal(image)}
                  />
                ))}
              </div>
              <button
                className={`${classes.carouselButton} ${classes.carouselButtonRight}`}
                onClick={(e) =>
                  scrollRight(
                    e,
                    e.target.parentNode.querySelector(`.${classes.carousel}`)
                  )
                }
              >
                &#8250;
              </button>
            </div>
          </li>
        );
      });
    }, [ openModal, scrollLeft, scrollRight]);

  return (
    <div className={classes.myWork}>
      <h2>My Work</h2>
      <ul>{mappedList}</ul> {/* Render the list of projects */}
      {modalImage && ( // conditionally render the modal if modalImage is truthy
        <div className={classes.modal} onClick={closeModal}>
          <button className={classes.closeButton} onClick={closeModal}>
            X
          </button>
          <img src={modalImage} alt="full-screen" />
        </div>
      )}
    </div>
  );
};

export default Projects;