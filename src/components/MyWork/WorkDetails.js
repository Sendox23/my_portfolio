import { useLocation } from "react-router-dom";

import SlickCarousel from "./SlickCarousel";

import classes from "./WorkDetails.module.css";

const WorkDetails = () => {
  let { state } = useLocation();

  return (
    <div className={classes.projectDetails}>
      <SlickCarousel images={state.images} />
    </div>
  );
};
export default WorkDetails;
