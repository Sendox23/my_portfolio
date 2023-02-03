import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ErrorPage from "./pages/ErrorPage";
import LoadingSpinner from "./Components/UI/LoadingSpinner";
import AboutMePage from "./pages/AboutMePage";
import ContactMePage from "./pages/ContactMePage";
import LandingPage from "./pages/LandingPage";
import WorkPage from "./pages/WorkPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/home" element={<LandingPage />} />

            <Route path="/my-work" element={<WorkPage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/contact-me" element={<ContactMePage />} />
            <Route path="/" element={<LandingPage />} />
            <Route element={<LandingPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
