import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import Projects from "../components/MyWork/Projects";
import WorkDetails from "../components/MyWork/WorkDetails";
import { projectList } from "../resources/project_list";

const WorkDetailsPage = () => {
  let { state } = useLocation();

  return (
    <Fragment>
      <WorkDetails state={state}  isDetailPage="More Projects..." />
      <Projects projectList={projectList}/>
    </Fragment>
  );
};
export default WorkDetailsPage;
