import classes from "./MainNavigation.module.css";
import logo from "../../resources/logo.png";

import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
      <NavLink to="/home">
        <div className={classes.logoBox}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
      </NavLink>
      <hr className={classes.dividerTop} />
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/my-work"
      >
        My Work
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/about-me"
      >
        About Me
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/my-skills"
      >
        My Skills
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/contact-me"
      >
        Contact Me
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? classes.activeLink : classes.link
        }
        to="/resume"
      >
        Resume
      </NavLink>
      <hr className={classes.dividerBottom} />
      <div className={classes.emblemsBox}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <a
                className={classes.linkedin}
                href="https://www.linkedin.com/in/a-david-marshall-2b4b191b9/"
              >
                <i className="fa fa-linkedin fa-xl"></i>
              </a>
            </div>
            <div className="col-6">
              <a className={classes.github} href="https://github.com/Sendox23">
                <i className="fa fa-github fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
