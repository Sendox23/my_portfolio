import { Fragment } from "react";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

import classes from "./FormSuccess.module.css";

const FormSuccess = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.success}>
        <h3>You have successfully submitted your form!</h3>

      </div>
    </Fragment>
  );
};

export default FormSuccess;
