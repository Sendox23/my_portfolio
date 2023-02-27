import { NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import logo from "../../resources/logo.png";
import classes from "./MainNavigation.module.css";
import NavFooter from "./NavFooter";
import BackgroundOverlay from "../UI/BackgroundOverlay";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

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
        <hr className={classes.dividerBottom} />
        <NavFooter />
      </nav>
      {isNavOpen && windowWidth < 800 && (
        <BackgroundOverlay onClick={toggleNavMenuHandler} />
      )}
      {windowWidth < 800 && (
        <button className={classes.navToggle} onClick={toggleNavMenuHandler}>
          ☰
        </button>
      )}
    </Fragment>
  );
};

export default MainNavigation;