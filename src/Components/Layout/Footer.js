import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <a
              className={classes.linkedin}
              href="https://www.linkedin.com/in/a-david-marshall-2b4b191b9/"
            >
              <i className="fa fa-linkedin fa-xl"></i>
            </a>
          </div>
          <div className="col-4">
            <a className={classes.github} href="https://github.com/Sendox23">
              <i className="fa fa-github fa-xl"></i>
            </a>
          </div>
          <div className="col-4">
            <a className={classes.twitter} href="https://twitter.com/s3nd0x">
              <i className="fa fa-twitter fa-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
