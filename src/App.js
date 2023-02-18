
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layout/Root";
import ErrorPage from "./pages/ErrorPage";

import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "home", element: <LandingPage /> },
      { path: "my-work", element: <WorkPage /> },
      { path: "about-me", element: <AboutMePage /> },
      { path: "contact-me", element: <ContactMePage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
