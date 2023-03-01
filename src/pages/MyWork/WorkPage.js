import Projects from "../../components/MyWork/Projects";

import classes from "./WorkPage.module.css";

const WorkPage = () => {

  return (
    <div className={classes.workPage}>
      <h2>My Work</h2>
      <Projects />

    </div>
  );
};
export default WorkPage;
