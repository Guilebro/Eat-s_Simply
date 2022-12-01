import PropTypes from "prop-types";
import "./SimplyMenu.css";

function MenuCard({ meal, img, mealPic, title, handleHover, handleUnhover }) {
  return (
    <div className={`menu${meal}`}>
      <img
        src={img}
        alt={meal}
        className={`menuPic ${mealPic}`}
        onMouseOver={() => handleHover(meal)}
        onFocus={() => handleHover(meal)}
        onMouseOut={handleUnhover}
        onBlur={handleUnhover}
      />
      <h3 className="menuTitle">{title}</h3>
    </div>
  );
}

export default MenuCard;

MenuCard.propTypes = {
  meal: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  mealPic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleUnhover: PropTypes.func.isRequired,
};
