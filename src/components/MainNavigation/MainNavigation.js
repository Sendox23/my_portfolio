import { NavLink } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from "react";
import NavFooter from "./NavFooter";
import BackgroundOverlay from "../UI/BackgroundOverlay";
import logo from "../../resources/images/logo.png";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // state for opening and closing the navigation menu
  const [isNavOpen, setIsNavOpen] = useState(false);

  // state for tracking the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // handle window resize and update the width state
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  // toggle the navigation menu
  const toggleNavMenuHandler = useCallback(() => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  }, []);

  // function for adding the active class to a NavLink
  const activeClassHandler = ({ isActive }) => {
    return isActive ? classes.activeLink : classes.link;
  };

  // close the navigation menu when clicking on a link (for mobile)
  const closeNavMenuHandler = () => {
    windowWidth < 800 && setIsNavOpen(false);
  };

  // add event listener for window resize and remove it on cleanup
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // set the initial navigation menu state based on window width
  useEffect(() => {
    setIsNavOpen(windowWidth >= 800);
  }, [windowWidth]);

  return (
    <Fragment>
      {/* Navigation menu */}
      <nav
        onClick={closeNavMenuHandler}
        style={{
          transform: isNavOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Logo */}
        <NavLink to="/home">
          <div className={classes.logoBox}>
            <img className={classes.logo} src={logo} alt="logo" />
          </div>
        </NavLink>

        {/* Navigation links */}
        <hr className={classes.dividerTop} />
        <NavLink
          className={activeClassHandler}
          to="/home"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </NavLink>
        <NavLink
          className={activeClassHandler}
          to="/my-work"
          onClick={() => window.scrollTo(0, 0)}
        >
          My Work
        </NavLink>
        <NavLink
          className={activeClassHandler}
          to="/about-me"
          onClick={() => window.scrollTo(0, 0)}
        >
          About Me
        </NavLink>
        <NavLink
          className={activeClassHandler}
          to="/my-skills"
          onClick={() => window.scrollTo(0, 0)}
        >
          My Skills
        </NavLink>
        <NavLink
          className={activeClassHandler}
          to="/contact-me"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact Me
        </NavLink>
        <hr className={classes.dividerBottom} />

        {/* Footer */}
        <NavFooter />
      </nav>

      {/* Background overlay for mobile navigation */}
      {isNavOpen && windowWidth < 800 && (
        <BackgroundOverlay onClick={toggleNavMenuHandler} />
      )}

      {/* Navigation toggle button for mobile */}
      {windowWidth < 800 && (
        <button className={classes.navToggle} onClick={toggleNavMenuHandler}>
          &#9776;
        </button>
      )}
    </Fragment>
  );
};

export default MainNavigation;
