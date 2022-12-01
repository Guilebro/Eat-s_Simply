import PropTypes from "prop-types";
import "./nextArrow.css";

function NextArrow({ onClick }) {
  return (
    <input
      type="image"
      src="../../../public/Icon/fleche-droite.png"
      alt="gauche"
      className="arrowRight"
      onClick={onClick}
    />
  );
}

NextArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextArrow;
