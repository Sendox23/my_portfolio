import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const WorkRoot = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default WorkRoot;
