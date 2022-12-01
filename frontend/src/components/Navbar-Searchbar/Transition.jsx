/* eslint-disable import/no-unresolved */
import Home from "@pages/Home/Home";
import PropTypes from "prop-types";
import React, { useState } from "react";
import FilterPage from "@pages/filterPage/FilterPage";
import { Routes, Route } from "react-router-dom";
import ShoppingListPage from "@pages/ShoppingListPage/ShoppingListPage";
import RecipeeCard from "@pages/recipee/RecipeeCard";
import Contact from "@pages/Contact/Contact";
import Result from "@pages/result/Result";
import Favorite from "@pages/Favorite/Favorite";

function Transition({
  handleList,
  shoppingList,
  favorite,
  handleFavorite,
  handleNewFavorite,
}) {
  const [selectionArray, setSelectionArray] = useState([]);
  const selectFilter = (myArray) => {
    setSelectionArray(myArray);
  };
  const [musicArea, setMusicArea] = useState("");
  const chooseMusic = (music) => {
    setMusicArea(music);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/FilterPage"
        element={
          <FilterPage selectFilter={selectFilter} chooseMusic={chooseMusic} />
        }
      />
      <Route
        path="/ShoppingList"
        element={<ShoppingListPage shoppingList={shoppingList} />}
      />
      <Route
        path="/Recette/:id"
        element={
          <RecipeeCard
            handleList={handleList}
            handleFavorite={handleFavorite}
            handleNewFavorite={handleNewFavorite}
            favorite={favorite}
          />
        }
      />
      <Route path="/Favorites" element={<Favorite favorite={favorite} />} />
      <Route path="/Contact" element={<Contact />} />
      <Route
        path="/FilterResult"
        element={
          <Result selectionArray={selectionArray} musicArea={musicArea} />
        }
      />
    </Routes>
  );
}

export default Transition;

Transition.propTypes = {
  handleList: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  handleNewFavorite: PropTypes.func.isRequired,
  shoppingList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  favorite: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Transition.defaultProps = {
  shoppingList: null,
  favorite: null,
};
