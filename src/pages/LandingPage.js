import { Link } from "react-router-dom";
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
          <Link className="david-link" to="/about-me">
            <span className={classes.david}></span>
          </Link>
        </h2>

        <h2>
          <Link className="marshall-link" to="/my-work">
            <span className={classes.marshall}></span>
          </Link>
        </h2>
      </div>
      <BackgroundPhoto />
    </div>
  );
};

export default LandingPage;
