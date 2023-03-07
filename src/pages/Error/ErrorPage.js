import Error from "../../components/Error/Error";
import PageContent from "../../components/Layout/PageContent";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

const ErrorPage = () => {

  return (
    <PageContent>
      <MainNavigation />
      <Error />
    </PageContent>
  );
};
export default ErrorPage;
