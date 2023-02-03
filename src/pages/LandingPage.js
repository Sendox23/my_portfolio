
// import BackgroundPhoto from "../Components/BackgroundPhoto/BackgroundPhoto";
import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={classes.landingPage}>
      <div className={classes.nameBanner}>
        <h2>
          <span className={classes.aaron}></span>
        </h2>

        <h2>
          <span className={classes.david}>David</span>
        </h2>

        <h2>
          <span className={classes.marshall}>Marshall</span>
        </h2>
      </div>
      {/* <BackgroundPhoto /> */}
    </div>
  );
};

export default LandingPage;
