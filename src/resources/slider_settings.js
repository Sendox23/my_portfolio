export const sliderSettings = {
  dots: true, // show navigation dots
  appendDots: (
    dots // customize the navigation dot bar
  ) => (
    <div
      style={{
        background: "radial-gradient(white, var(--gold))",
        maxHeight: "2rem",
        position: "absolute", // add this to position the dot bar relative to the carousel container
        bottom: "-.8rem", // add this to position the dot bar at the bottom of the carousel container
        left: "50%", // add this to center the dot bar horizontally
        transform: "translateX(-50%)", // add this to center the dot bar horizontally
        borderLeft: "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "1px solid black",
      }}
    >
      <ul
        style={{
          margin: "0px",
          display: "flex",
          justifyContent: "center", // add this to center the dots horizontally
          alignItems: "center", // add this to center the dots vertically
          height: "100%",
        }}
      >
        {dots}
      </ul>
    </div>
  ),
  infinite: true, // enable infinite loop
  speed: 1000, // set transition speed to 1 second
  slidesToShow: 1, // show one slide at a time
  slidesToScroll: 1, // scroll one slide at a time
};
