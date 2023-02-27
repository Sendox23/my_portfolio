import classes from './BackgroundOverlay.module.css'

const BackgroundOverlay = (props) => {
  return <div onClick = {props.onClick} className={classes.backgroundOverlay}>{props.children}</div>;
};
export default BackgroundOverlay;
