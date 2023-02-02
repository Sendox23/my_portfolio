import resume from "../../resources/AaronDavidMarshallResume.pdf";
import classes from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <div className={classes.aboutMe}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <h2>About</h2>
            <p>
              As a front-end web developer, I am dedicated to creating visually
              appealing and user-friendly websites that meet the needs of both
              clients and users. With a strong understanding of HTML, CSS, and
              Bootstrap, I have a proven track record of delivering high-quality
              results that effectively communicate clients' brand messaging and
              values. My expertise in JavaScript, React, and Redux allows me to
              add interactive and dynamic functionality to my projects,
              enhancing the user experience and engaging visitors on a deeper
              level.<br/><br/> I take pride in my ability to write clean, organized code
              and pay close attention to detail, ensuring that each project
              meets the highest standards of quality and functionality. My
              passion for front-end development is matched only by my dedication
              to delivering results that exceed clients' expectations.<br/><br/>  In my
              free time, I enjoy staying active and engaged through a variety of
              interests and hobbies. I am a fan of both UFC and football, and I
              enjoy playing pool and video games, working out, playing chess,
              cooking, and spending time with my dog. These pursuits help me to
              maintain a healthy work-life balance and bring a fresh perspective
              to my work as a front-end web developer.<br/><br/>  Let's work together to
              bring your ideas to life on the web. I am confident in my ability
              to deliver results that meet your needs and exceed your
              expectations.
            </p>
            <a href={resume}>My resume (pdf)</a>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
