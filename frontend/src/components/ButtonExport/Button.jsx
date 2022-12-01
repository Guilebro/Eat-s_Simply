import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

function Button({ content, myClass, myHandle, myRecipe }) {
  return (
    <div>
      <button
        className={`littleButton ${myClass}`}
        type="button"
        onClick={() => myHandle(myRecipe)}
      >
        {content}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  content: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  myHandle: PropTypes.func,
  myRecipe: PropTypes.objectOf(PropTypes.string, null),
};

Button.defaultProps = {
  myRecipe: null,
  myHandle: null,
};
