import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Layout/Root";
import ErrorPage from "./pages/Error/ErrorPage";

import AboutMePage from "./pages/AboutMe/AboutMePage";
import ContactMePage from "./pages/ContactMe/ContactMePage";
import HomePage from "./pages/Home/HomePage";
import WorkPage from "./pages/MyWork/WorkPage";
import ProjectPage from "./pages/Projects/ProjectPage";
import ProjectDetailsPage from "./pages/Projects/ProjectDetailsPage";
import MySkillsPage from "./pages/MySkills/MySkillsPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    
    children: [
      { path: "/", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      {
        path: "my-work",
        element: <WorkPage />,
        children: [
          {
            path: ":projectId",
            element: <ProjectPage />,
            children: [{ path: "details", element: <ProjectDetailsPage /> }],
          },
        ],
      },
      { path: "about-me", element: <AboutMePage /> },
      { path: "contact-me", element: <ContactMePage /> },
      { path: "my-skills", element: <MySkillsPage /> },

    ],
  },
  
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
