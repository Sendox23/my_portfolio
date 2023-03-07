
import "./background.css"

const PixelBackground = (props) => {
  return (
    <section id="background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        {props.children}
      </div>
    </section>
  );
};

export default PixelBackground;
