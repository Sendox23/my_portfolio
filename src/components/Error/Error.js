import { Fragment } from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import classes from "./Error.module.css";

const Error = () => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Page Not Found!";
    message = "Could not find resource or page.";
  }
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.error}>
        <h3>{title}</h3>
        <h4>{message}</h4>
      </div>
    </Fragment>
  );
};
export default Error;
