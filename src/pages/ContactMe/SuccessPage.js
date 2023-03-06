import { Fragment } from "react";
import MainNavigation from "../../Components/MainNavigation/MainNavigation";

import classes from "SuccessPage.module.css";

const SuccessPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.success}>
        <h3>You have successfully submitted your form!</h3>
     
      </div>
    </Fragment>
  );
};

export default SuccessPage;
