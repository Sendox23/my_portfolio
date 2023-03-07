import MainNavigation from "../MainNavigation/MainNavigation";
import classes from "./Root.module.css";
import { Outlet, useNavigation } from "react-router-dom";
import Background from "../UI/Background";

const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <Background>

        <MainNavigation />
        <main>
          {navigation.state === "loading" && <p>Loading.....</p>}
          <Outlet />
        </main>

    </Background>
  );
};

export default RootLayout;
