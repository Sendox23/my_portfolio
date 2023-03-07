
import "./StarryBackground.css"

const PixelBackground = (props) => {
  return (
    <div id="background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        {props.children}
      </div>
    </div>
  );
};

export default PixelBackground;
