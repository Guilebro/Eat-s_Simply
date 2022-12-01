import React from "react";
import PropTypes from "prop-types";

import "./Meals.css";

function Meals({ mealName, mealPicture }) {
  return (
    <div className="meals">
      <img className="mealImage" src={mealPicture} alt="{mealName}" />
      <p className="mealTitle">{mealName}</p>
    </div>
  );
}

export default Meals;

Meals.propTypes = {
  mealName: PropTypes.string.isRequired,
  mealPicture: PropTypes.string.isRequired,
};
