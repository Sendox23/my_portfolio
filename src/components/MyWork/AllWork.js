import Work from "./Work";
import classes from "./AllWork.module.css";

const AllWork = ({ workList }) => {
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
    <div className={classes.allWork}>
      <ul>{mappedWorks}</ul>
    </div>
  );
};
export default AllWork;
