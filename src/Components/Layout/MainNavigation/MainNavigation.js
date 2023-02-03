import classes from "./MainNavigation.module.css";
import logo from "../../../resources/logo.png";
import DropDownNav from "./DropDownNav";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <Link to="/home">
              <img className={classes.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className={classes.link} to="/my-work">
              My Work
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className={classes.link} to="/about-me">
              About Me
            </Link>
          </div>
          <div className="col-sm-3">
            <Link className={classes.link} to="/contact-me">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <DropDownNav />
    </div>
  );
};

export default MainNavigation;
