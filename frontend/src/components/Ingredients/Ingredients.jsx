import React from "react";
import PropTypes from "prop-types";
import "./Ingredients.css";

function Ingredients({ ingredients }) {
  return (
    <div className="ingredients">
      {ingredients.map((ing) => (
        <label className="form-control">
          <input className="checkboxStyle" type="checkbox" name="checkbox" />
          <p>{ing}</p>
        </label>
      ))}
    </div>
  );
}

export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf.isRequired,
};
