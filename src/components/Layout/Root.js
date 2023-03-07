import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Root.module.css";
import { Outlet, useNavigation } from "react-router-dom";
import Background from "../UI/Background";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <div className={classes.layout}>
      <Background />
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading.....</p>}
        <Outlet />
      </main>
<footer>© 2023 A. David Marshall</footer>
    </div>
  );
};

export default RootLayout;
