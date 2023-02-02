import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />

      <main>{props.children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
