import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Root.module.css";
import { Outlet, useNavigation } from "react-router-dom";
import Background from "../UI/StarryBackground";

// The RootLayout component acts as the main layout for the entire app, which includes the navigation bar and the main content.
const RootLayout = () => {
  const navigation = useNavigation();

  // Render the MainNavigation component at the top of the layout to provide navigation to different pages.
  // Render the Background component as the background of the layout.
  // Render the Outlet component to render child components based on the current route.

  return (
    <div className={classes.layout}>
      <Background />
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading.....</p>}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;