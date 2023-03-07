import { useEffect } from "react";
import Projects from "../../components/MyWork/Projects";
import { projectList } from "../../components/MyWork/project_list";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.workPage}>
      <div className={classes.myWork}>
        <h2>My Work</h2>
        <ul>
          {projectList.map((project) => {
            return (
              <Projects
                name={project.name}
                key={project.id}
                id={project.id}
                description={project.description}
                images={project.images}
                gitLink={project.gitLink}
                websiteLink={project.websiteLink}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default WorkPage;
