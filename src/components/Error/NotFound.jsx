import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="notfound">
        <h1 className="notfound__title">404 Not Found</h1>
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

export default NotFound;
