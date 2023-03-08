import { Fragment } from "react";
import { useLocation } from "react-router-dom";

import AllWork from "../components/MyWork/AllWork";
import WorkDetails from "../components/MyWork/WorkDetails";
import { workList } from "../resources/work_list";

const WorkDetailsPage = () => {
  let { state } = useLocation();

  const workIdToFilter = state.id;
  
  const filteredWorkList = workList.filter(
    (work) => work.id !== workIdToFilter
  );

  return (
    <Fragment>
      <WorkDetails state={state} title="More Projects..." />
      <AllWork workList={filteredWorkList} />
    </Fragment>
  );
};
export default WorkDetailsPage;
