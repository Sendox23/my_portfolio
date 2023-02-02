import { useState } from "react";
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
          <a href="/my-work">Work</a>

          <a href="/about-me">About Me</a>

          <a href="/contact-me">Contact Me</a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default DropDownNav;
