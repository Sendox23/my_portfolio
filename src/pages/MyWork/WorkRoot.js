import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import WorkPage from "./WorkPage";

const WorkRoot = () => {
  return (
    <Fragment>
      <Outlet />
      <WorkPage />
    </Fragment>
  );
};

export default WorkRoot;
