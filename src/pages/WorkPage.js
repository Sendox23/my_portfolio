import AllWork from "../components/MyWork/AllWork";
import PageContent from "../components/Layout/PageContent";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { workList } from "../resources/work_list";
import { Await } from "react-router-dom";
import { Suspense } from "react";

const WorkPage = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={workList}>
        <PageContent title="My Work">
          <AllWork workList={workList} />
        </PageContent>
      </Await>
    </Suspense>
  );
};
export default WorkPage;
