import data from "../../helper/data";
import { useNavigate, useParams } from "react-router-dom";
import "./PreviousDetail.scss"
import NotFound from "../../components/Error/NotFound";

const PreviousDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const filtered = data.filter((item) => item.id === Number(id));

  if (filtered.length === 0 || !filtered[0].image || !filtered[0].desc) {
    return <NotFound />;
  }

  return (
    <>
      <div className="previousDetails">
        <img
          src={filtered[0].image}
          alt="image"
          className="previousDetails__image"
        />
        <p className="previousDetails__text">{filtered[0].desc}</p>
        <p className="previousDetails__text">{filtered[0].date}</p>
      <div className="buttons">
        <button
          className="buttons__back"
          type="button"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="buttons__home"
          type="button"
          onClick={() => navigate("/")}
        >
          Home
        </button>
      </div>
      </div>
    </>
  );
};

export default PreviousDetail;
