import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import SearchBarResult from "./SearchBarResult";

function SearchBar({ searchBarClass }) {
  const [recipes, setRecipes] = useState();
  const [recipesRequest, setRecipesRequest] = useState();
  const [switchSearchBarClass, setSwitchSearchBarClass] =
    useState(searchBarClass);

  const handleSearchBar = () => {
    setRecipes("");
    setRecipesRequest();
  };

  const getRecipes = (event) => {
    setRecipes(event.target.value);
    if (!event.target.value) {
      setRecipesRequest();
    }
  };
  useEffect(() => {
    if (recipesRequest !== null) {
      if (recipes) {
        setSwitchSearchBarClass(`${searchBarClass} autoCompleteDisplay`);
      } else {
        setSwitchSearchBarClass(searchBarClass);
        setRecipesRequest();
      }
    }
  }, [recipesRequest]);
  useEffect(() => {
    if (!recipesRequest && recipes) {
      const url = `http://localhost:3000/mealByLetter/${recipes.charAt(0)}`;
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => setRecipesRequest(data.meals));
    }
  }, [recipes]);
  return (
    <div>
      <div className="fullSearchBar">
        <div className={switchSearchBarClass}>
          <img src="../../public/Icon/loup.png" alt="loupe" />
          <input
            type="text"
            className={`${searchBarClass}Input`}
            value={recipes}
            placeholder="What recipe are you looking for ?"
            onChange={(event) => {
              getRecipes(event);
            }}
          />
        </div>
        {recipesRequest && (
          <div className="allResults">
            {recipesRequest.map((recipe) => {
              return (
                recipe.strMeal
                  .toLowerCase()
                  .includes(recipes.toLowerCase()) && (
                  <Link to={`Recette/${recipe.idMeal}`}>
                    <SearchBarResult
                      key={recipe.idMeal}
                      strMeal={recipe.strMeal}
                      strMealThumb={recipe.strMealThumb}
                      searchBarClass={searchBarClass}
                      actualSearch={recipes}
                      handleSearchBar={handleSearchBar}
                    />
                  </Link>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  searchBarClass: PropTypes.string.isRequired,
};
