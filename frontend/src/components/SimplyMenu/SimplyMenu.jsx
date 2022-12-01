import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MenuCard from "./MenuCard";
import "./SimplyMenu.css";

function SimplyMenu({ menu }) {
  const [allPic, setAllPic] = useState(["", "", ""]);
  const allMeal = ["Starter", "Meal", "Dessert"];

  const handleHover = (actualPic) => {
    switch (actualPic) {
      case "Starter":
        setAllPic(["hoverPic", "darkPic", "darkPic"]);
        break;
      case "Meal":
        setAllPic(["darkPic", "hoverPic", "darkPic"]);
        break;
      case "Dessert":
        setAllPic(["darkPic", "darkPic", "hoverPic"]);
        break;
      default:
        break;
    }
  };

  const handleUnhover = () => {
    setAllPic(["", "", ""]);
  };

  return (
    <div className="menu">
      {menu.map((meal, index) => (
        <Link to={`/Recette/${meal.idMeal}`}>
          <MenuCard
            meal={allMeal[index]}
            img={meal.strMealThumb}
            mealPic={allPic[index]}
            title={meal.strMeal}
            handleHover={handleHover}
            handleUnhover={handleUnhover}
          />
        </Link>
      ))}
    </div>
  );
}

export default SimplyMenu;

SimplyMenu.propTypes = {
  menu: PropTypes.arrayOf.isRequired,
};
