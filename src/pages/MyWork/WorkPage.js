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
      <h2>My Work</h2>
      <Projects projectList={projectList} />
    </div>
  );
};
export default WorkPage;
