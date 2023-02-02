import classes from "./MainNavigation.module.css";
import logo from "../../../resources/logo.png";
import DropDownNav from "./DropDownNav";
const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <a href="/home">
              <img className={classes.logo} src={logo} alt="logo" />
            </a>
          </div>
          <div className="col-sm-3">
            <a className={classes.link} href="/my-work">
              My Work
            </a>
          </div>
          <div className="col-sm-3">
            <a className={classes.link} href="/about-me">
              About Me
            </a>
          </div>
          <div className="col-sm-3">
            <a className={classes.link} href="/contact-me">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <DropDownNav />
    </div>
  );
};

export default MainNavigation;
