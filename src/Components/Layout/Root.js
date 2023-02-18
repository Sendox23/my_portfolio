import MainNavigation from "./MainNavigation/MainNavigation";
// import Footer from "./Footer";
import classes from "./Layout.module.css";
import { Outlet, useNavigation } from "react-router-dom";
const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div className={classes.layout}>
      <MainNavigation />

      <main>
        {navigation.state === "loading" && <p>Loading.....</p>}
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;