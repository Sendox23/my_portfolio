import Work from "./Work";
import classes from "./AllWork.module.css";

const Works = ({ workList }) => {
  const mappedWorks = workList.map((work) => {
    return (
      <Work
        name={work.name}
        key={work.id}
        id={work.id}
        description={work.description}
        images={work.images}
        gitLink={work.gitLink}
        websiteLink={work.websiteLink}
      />
    );
  });

  return (
    <div className={classes.works}>
      <ul>{mappedWorks}</ul>
    </div>
  );
};
export default Works;
