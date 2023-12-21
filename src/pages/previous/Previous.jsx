import "./Previous.scss";
import data from "../../helper/data";
import { useNavigate } from "react-router-dom";

const Previous = () => {
  const navigate = useNavigate();
  return (
    <div className="previous">
      <h1 className="previous__title">My Previous Teams</h1>

      <div className="previous__items">
        {data.map(({ id, image }) => (
          <div
            key={id}
            className="previous__item"
            onClick={() => navigate(`${id}`)}
          >
            <img src={image} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previous;
