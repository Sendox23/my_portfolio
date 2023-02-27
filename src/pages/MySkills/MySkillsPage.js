import classes from "./MySkillsPage.module.css";

const MySkillsPage = () => {
  return (
    <div className={classes.mySkills}>
      <h2>Skills</h2>
      <div className={classes.mySkillsList}>
        <h3>Front-End Development</h3>
        <ul>
          <li>Proficient in HTML, CSS, and JavaScript</li>
          <li>Experienced with popular front-end frameworks such as React</li>
          <li>Skilled in creating responsive, mobile-first designs</li>
          <li>Experience with UI/UX design principles and best practices</li>
        </ul>
        <h3>Back-End Development</h3>
        <ul>
          <li>Experience building RESTful APIs</li>
          <li>
            Skilled in working with server-side languages such as Node.js and
            Python
          </li>
          <li>
            Experienced with popular back-end frameworks such as Express.js and
            Flask
          </li>
          <li>
            Familiarity with database management systems such as MongoDB and
            MySQL
          </li>
        </ul>
        <h3>DevOps</h3>
        <ul>
          <li>Proficient in Git and version control</li>
          <li>
            Experience with cloud computing platforms such as AWS and Heroku{" "}
          </li>
          <li>
            Familiarity with containerization technologies such as Docker{" "}
          </li>
          <li>
            Skilled in deploying and maintaining web applications in production
            environments
          </li>
        </ul>
        <h3>Other Skills</h3>
        <ul>
          <li>Skilled in problem-solving and troubleshooting</li>
          <li>
            Passionate about staying up-to-date with the latest technologies and
            trends
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MySkillsPage;
