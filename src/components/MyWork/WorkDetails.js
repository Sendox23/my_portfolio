import { Fragment } from "react";
import PageContent from "../Layout/PageContent";
import SlickCarousel from "./SlickCarousel";

import classes from "./WorkDetails.module.css";

const WorkDetails = ({ state }) => {
  return (
    <PageContent title={state.name}>
      <div className={classes.projectDetails}>
        <div className={classes.projectLinks}>
          {state.gitLink && (
            <Fragment>
              <a href={state.gitLink} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </Fragment>
          )}
          {state.websiteLink && (
            <Fragment>
              <a href={state.websiteLink} target="_blank" rel="noreferrer">
                Website
              </a>
            </Fragment>
          )}
        </div>
        <SlickCarousel images={state.images} />
        <p>{state.description}</p>
      </div>
    </PageContent>
  );
};
export default WorkDetails;
