import { useParams,  } from "react-router-dom";
import Slider from "react-slick";

const WorkDetailsPage = (props) => {

  const params = useParams();

  return (
    <div className="page">
      <Slider />
    </div>
  );
};
export default WorkDetailsPage;
