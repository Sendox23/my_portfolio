import { useEffect } from "react";

import classes from "./HomePage.module.css";
import selfie from "../../resources/SelfPhotoBaWTransparent.png";


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='page'>
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

    </div>
  );
};

export default HomePage;
