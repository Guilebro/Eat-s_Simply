import PropTypes from "prop-types";
import "./prevArrow.css";

function PrevArrow({ onClick }) {
  return (
    <input
      type="image"
      src="../../public/Icon/fleche-gauche.png"
      alt="gauche"
      className="arrowLeft"
      onClick={onClick}
    />
  );
}

PrevArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PrevArrow;
