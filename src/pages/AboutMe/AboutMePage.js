import classes from "./AboutMePage.module.css";

const AboutMePage = () => {
  return (
    <div className={classes.aboutMe}>
      <h2>About</h2>

      <p>
        Hello!
        <br />       <br />
        My name is David
        <br />       <br />
        I’m a passionate full-stack web developer with a keen eye for detail and
        a strong commitment to writing clean, efficient, and maintainable code.
        I have extensive experience with modern front-end technologies like
        React, Redux, and Next.js, as well as back-end technologies like
        Node.js, Express, and MongoDB. <br />        <br />With my exceptional
        problem-solving skills and my ability to think outside the box, I’m able
        to come up with innovative and effective solutions to complex
        challenges. I thrive in fast-paced, collaborative environments and I’m
        always eager to take on new challenges and learn new technologies.{" "}
        <br /><br /> I believe that communication is the key to success, which is why
        I always keep an open line of communication with my clients and
        stakeholders to ensure that their needs and expectations are met.
        Whether it’s a small project or a large-scale enterprise application, I
        approach every project with the same level of dedication and attention
        to detail. <br /><br /> When I’m not coding, you can find me exploring the
        great outdoors or catching up on the latest tech news. I’m always
        looking for new opportunities to expand my skill set and take on new
        challenges, so if you’re looking for a dedicated and talented web
        developer, I’d love to hear from you!
      </p>
    </div>
  );
};
export default AboutMePage;
