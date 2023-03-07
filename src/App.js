import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import ErrorPage from "./pages/ErrorPage";

import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";

import MySkillsPage from "./pages/MySkillsPage";
// import WorkDetailsPage from "./pages/MyWork/WorkDetailsPage";
import SuccessPage from "./pages/SuccessPage";
import WorkRoot from "./pages/WorkRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      {
        path: "my-work",
        element: <WorkRoot />,
        children: [
          {
            path: "",
            element: <WorkPage />,
          },
          // {
          //   path: ":projectName",
          //   element: <WorkDetailsPage />,
          // },
        ],
      },

      { path: "about-me", element: <AboutMePage /> },
      {
        path: "contact-me",
        element: <ContactMePage />,
      },
      { path: "my-skills", element: <MySkillsPage /> },
      { path: "contact-me/success", element: <SuccessPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
