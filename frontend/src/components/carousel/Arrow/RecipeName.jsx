/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import Title from "@components/Title/Title";

function RecipeName({ imageIndex, selectionArray }) {
  return (
    <div className="likeCarousel">
      {selectionArray.map((img, idx) => (
        <div className={idx === imageIndex ? "recipeName" : "noRecipeName"}>
          <Title
            title={img.strMeal}
            myClass="recipeNameTitle"
            myContainerClass="recipeNameTitleContainer"
          />
        </div>
      ))}
    </div>
  );
}

RecipeName.propTypes = {
  imageIndex: PropTypes.number.isRequired,
  selectionArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default RecipeName;
