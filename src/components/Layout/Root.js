import MainNavigation from "../MainNavigation/MainNavigation";

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
