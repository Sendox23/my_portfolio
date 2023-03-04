import { NavLink } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import NavFooter from "./NavFooter";
import BackgroundOverlay from "../UI/BackgroundOverlay";
import logo from "../../resources/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const toggleNavMenuHandler = useCallback(() => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  }, []);

  const activeClassHandler = ({ isActive }) => {
    return isActive ? classes.activeLink : classes.link;
  };
  const closeNavMenuHandler = () => {
    windowWidth < 800 && setIsNavOpen(false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    setIsNavOpen(windowWidth >= 800);
  }, [windowWidth]);

  return (
    <Fragment>
      <nav
        onClick={closeNavMenuHandler}
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
        <NavLink className={activeClassHandler} to="/home">
          Home
        </NavLink>
        <NavLink className={activeClassHandler} to="/my-work">
          My Work
        </NavLink>
        <NavLink className={activeClassHandler} to="/about-me">
          About Me
        </NavLink>
        <NavLink className={activeClassHandler} to="/my-skills">
          My Skills
        </NavLink>
        {/* <NavLink className={activeClassHandler} to="/contact-me">
          Contact Me
        </NavLink> */}
        <hr className={classes.dividerBottom} />
        <NavFooter />
      </nav>
      {isNavOpen && windowWidth < 800 && (
        <BackgroundOverlay onClick={toggleNavMenuHandler} />
      )}
      {windowWidth < 800 && (
        <button className={classes.navToggle} onClick={toggleNavMenuHandler}>
          &#9776;
        </button>
      )}
    </Fragment>
  );
};

export default MainNavigation;
