import React from "react";
import "./recipeeCard.css";
import PropTypes from "prop-types";

function CategoriesBox({ myImageClass, mysrc }) {
  return (
    <div className="areaContainer">
      <img
        className={myImageClass}
        src={`../../Icon/${mysrc}.png`}
        alt="icon"
      />
      <p className="categoryTitle">{mysrc}</p>
    </div>
  );
}

export default CategoriesBox;

CategoriesBox.propTypes = {
  myImageClass: PropTypes.string.isRequired,
  mysrc: PropTypes.string.isRequired,
};
