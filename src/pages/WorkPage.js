import Projects from "../components/MyWork/Projects";
import PageContent from "../components/Layout/PageContent";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { projectList } from "../resources/project_list";
import { Await } from "react-router-dom";
import { Suspense } from "react";

const WorkPage = () => {

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Await resolve={projectList}>
        <PageContent title="My Work">
          <Projects projectList={projectList} />
        </PageContent>
      </Await>
    </Suspense>
  );
};
export default WorkPage;
