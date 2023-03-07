import Projects from "../components/MyWork/Projects";
import PageContent from "../components/Layout/PageContent";
import { projectList } from "../resources/project_list";


const WorkPage = () => {
  return (
    <PageContent title="My Work">
      <Projects projectList={projectList} />
    </PageContent>
  );
};
export default WorkPage;
