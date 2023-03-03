import Projects from "../../components/MyWork/Projects";
import { useEffect } from "react";
import classes from "./WorkPage.module.css";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classes.workPage}>
      <h2>My Work</h2> <Projects />
    </div>
  );
};
export default WorkPage;
