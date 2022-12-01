/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./recipeeCard.css";
import axios from "axios";
import Button from "@components/ButtonExport/Button";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import setIngredient from "../../utils/setIngredient";
import CategoriesBox from "./CategoriesBox";

function RecipeeCard({
  handleList,
  handleFavorite,
  handleNewFavorite,
  favorite,
}) {
  const [selectedMeal, setSelectedMeal] = useState([]);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [favoriteImage, setFavoriteImage] = React.useState(
    "../../Icon/favorite.png"
  );
  const videoKey = `${selectedMeal.strYoutube}`.split("?v=")[1];
  const videoSrc = `https://www.youtube.com/embed/${videoKey}`;
  const [allIngredient, setAllIngredient] = useState();

  const { id } = useParams();

  const handleSet = (myArray) => {
    setAllIngredient(myArray);
  };
  const handleOnClick = () => {
    if (isFavorite) {
      setFavoriteImage("../../Icon/favorite.png");
      const newFavorite = favorite.filter(
        (fav) => fav.idMeal !== selectedMeal.idMeal
      );
      handleNewFavorite(newFavorite);
    } else {
      setFavoriteImage("../../Icon/favorite-hover.png");
      handleFavorite(selectedMeal);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    favorite.forEach((fav) => {
      if (fav.idMeal === selectedMeal.idMeal) {
        setFavoriteImage("../../Icon/favorite-hover.png");
        setIsFavorite(true);
      }
    });
  }, [selectedMeal]);

  useEffect(() => {
    setFavoriteImage("../../Icon/favorite.png");
    setIsFavorite(false);
    const url = `http://localhost:3000/mealDetails/${id}`;
    axios.get(url).then((Response) => {
      setSelectedMeal(Response.data.meals[0]);
    });
  }, [id]);

  useEffect(() => {
    if (selectedMeal) {
      setIngredient(handleSet, selectedMeal);
    }
  }, [selectedMeal]);

  return (
    <motion.div
      className="Container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <div className="headerContainer">
        <img
          className="mealPic"
          src={selectedMeal.strMealThumb}
          alt="visuel plat"
        />
        <div className="presentationContainer">
          <div className="recipeeTittle">
            <h2>{selectedMeal.strMeal}</h2>
            <div
              role="none"
              className="favoriteScale"
              onClick={handleOnClick}
              onKeyDown={handleOnClick}
            >
              <img className="favorite" src={favoriteImage} alt="coeur" />
            </div>
          </div>
          <div className="categoryAndVideo">
            <div className="categoryContainer">
              {selectedMeal.strArea !== "Unknown" && (
                <CategoriesBox
                  myImageClass="areaIcon"
                  mysrc={selectedMeal.strArea}
                />
              )}
              {selectedMeal.strCategory !== "Unknown" && (
                <CategoriesBox
                  myImageClass="categoryIcon"
                  mysrc={selectedMeal.strCategory}
                />
              )}
            </div>
            <iframe
              className="video"
              src={videoSrc}
              title="YouTube video player"
            />
          </div>
        </div>
      </div>
      <div className="Text_container">
        <span className="ingredientTitle">INGREDIENTS :</span>
        <div className="ingredientContainer">
          {allIngredient &&
            allIngredient.map((ingredient) => (
              <span key={ingredient} className="ingredient">
                {ingredient}
              </span>
            ))}
        </div>
        <span className="instructionTitle">INSTRUCTIONS :</span>
        <p className="instructions">{selectedMeal.strInstructions}</p>
      </div>
      <div className="button">
        <Button
          content="ADD TO SHOPPING"
          myClass="shoppingBtn"
          myHandle={handleList}
          myRecipe={selectedMeal}
        />
      </div>
    </motion.div>
  );
}

export default RecipeeCard;

RecipeeCard.propTypes = {
  handleList: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleNewFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

RecipeeCard.defaultProps = {
  favorite: null,
};
