import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.error}>
        <h2>{title}</h2>
        <h3>{message}</h3>
      </div>
    </Fragment>
  );
};
export default ErrorPage;
