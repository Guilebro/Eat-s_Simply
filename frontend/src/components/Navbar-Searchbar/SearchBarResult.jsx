import PropTypes from "prop-types";

function SearchBarResult({
  strMeal,
  strMealThumb,
  searchBarClass,
  actualSearch,
  handleSearchBar,
}) {
  const boldSearch = strMeal.toLowerCase().search(actualSearch.toLowerCase());
  const sliceEnd = actualSearch.length + boldSearch;

  return (
    <div
      className={`${searchBarClass}Result`}
      onClick={handleSearchBar}
      onKeyPress={handleSearchBar}
      role="button"
      tabIndex="0"
    >
      <img src={strMealThumb} alt="MealImg" className="resultImg" />
      <div className="fullResultTitle">
        <p className="resultTitle">{strMeal.substring(0, boldSearch)}</p>
        <b className="resultTitle">{strMeal.slice(boldSearch, sliceEnd)}</b>
        <p className="resultTitle">{strMeal.substring(sliceEnd)}</p>
      </div>
    </div>
  );
}

export default SearchBarResult;

SearchBarResult.propTypes = {
  strMeal: PropTypes.string.isRequired,
  strMealThumb: PropTypes.string.isRequired,
  searchBarClass: PropTypes.string.isRequired,
  actualSearch: PropTypes.string.isRequired,
  handleSearchBar: PropTypes.func.isRequired,
};
