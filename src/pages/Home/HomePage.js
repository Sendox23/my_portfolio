import classes from "./HomePage.module.css";
import selfie from "../../resources/SelfPhotoBaWTransparent.png";
const HomePage = () => {
  return (
    <div className={classes.homePage}>
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
      </div>
    </div>
  );
};

export default HomePage;
