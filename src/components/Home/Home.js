import classes from "./Home.module.css";
import selfie from "../../resources/images/SelfPhotoBaWTransparent.png";

import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className={classes.selfImage}>
        <img className="img-fluid" src={selfie} alt="A. David Marshall" />
      </div>
      <div className={classes.nameBanner}>
        <h3>
          {/* See CSS for .aaron input */}
          <span className={classes.aaron}></span>
        </h3>

        <h3>
          <span className={classes.david}>David</span>
        </h3>

        <h3>
          <span className={classes.marshall}>Marshall</span>
        </h3>
        <h4>Front-End Web Developer</h4>
      </div>
    </Fragment>
  );
};

export default Home;
