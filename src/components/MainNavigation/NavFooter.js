import classes from "./NavFooter.module.css";

// Function component that renders social media emblems
const NavFooter = () => {
  return (
    <div className={classes.emblemsBox}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            {/* LinkedIn emblem */}
            <a
              className={classes.linkedin}
              href="https://www.linkedin.com/in/david-marshall-2b4b191b9/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin fa-xl"></i>
            </a>
          </div>
          <div className="col-6">
            {/* GitHub emblem */}
            <a
              className={classes.github}
              href="https://github.com/Sendox23"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
