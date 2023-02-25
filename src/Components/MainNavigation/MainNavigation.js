import { NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import logo from "../../resources/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (window.innerWidth >= 800) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 800) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  }, [windowWidth]);

  const toggleNavMenuHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Fragment>
      <nav
        style={{
          transform: isNavOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
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
                <a
                  className={classes.github}
                  href="https://github.com/Sendox23"
                >
                  <i className="fa fa-github fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {windowWidth < 800 && (
        <button className={classes.navToggle} onClick={toggleNavMenuHandler}>
          ☰
        </button>
      )}
    </Fragment>
  );
};

export default MainNavigation;
