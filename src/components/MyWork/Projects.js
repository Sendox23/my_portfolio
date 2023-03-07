import Project from "./Project";
import classes from "./Projects.module.css";

const Projects = ({ projectList }) => {
  const mappedProjects = projectList.map((project) => {
    return (
      <Project
        name={project.name}
        key={project.id}
        id={project.id}
        description={project.description}
        images={project.images}
        gitLink={project.gitLink}
        websiteLink={project.websiteLink}
      />
    );
  });

  return (
    <div className={classes.projects}>
      <ul>{mappedProjects}</ul>
    </div>
  );
};
export default Projects;
