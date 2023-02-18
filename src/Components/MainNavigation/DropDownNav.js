import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./DropDownNav.module.css";

const DropDownNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={classes.dropDownNav}>
      <div className={classes.dropDownBox}>
        <i
          onClick={toggleDropdown}
          className="fa fa-bars fa-xl"
          aria-hidden="true"
        ></i>
      </div>
      {isDropdownOpen ? (
        <div  className={classes.dropDownNavBox}>
          <Link to="my-work">Work</Link>

          <Link to="about-me">About Me</Link>

          <Link to="contact-me">Contact Me</Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default DropDownNav;
