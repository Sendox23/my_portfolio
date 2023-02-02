import BackgroundPhoto from "../Components/BackgroundPhoto/BackgroundPhoto";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <div className={classes.nameBanner}>
        <h2>
          <span className={classes.aaron}></span>
        </h2>

        <h2>
          <a className="david-link" href="/about-me">
            <span className={classes.david}></span>
          </a>
        </h2>

        <h2>
          <a className="marshall-link" href="/my-work">
            <span className={classes.marshall}></span>
          </a>
        </h2>
      </div>
      <BackgroundPhoto />
    </div>
  );
};

export default LandingPage;
