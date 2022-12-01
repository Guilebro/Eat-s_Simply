/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ShoppingList.css";
import Ingredients from "@components/Ingredients/Ingredients";
import Meals from "@components/Meals/Meals";
import Button from "@components/ButtonExport/Button";
import JsPDF from "jspdf";

function ShoppingList({ shoppingList }) {
  // ----------------------------------state----------------------------------------------------
  const [allIngredient, setAllIngredient] = useState();
  // -----------------------------------comportements-------------------------------------------
  const setList = () => {
    const ingredientsList = shoppingList.map((ingredients) =>
      Object.fromEntries(
        Object.entries(ingredients).filter(([key]) =>
          key.includes("strIngredient")
        )
      )
    );
    const mesuresList = shoppingList.map((ingredients) =>
      Object.fromEntries(
        Object.entries(ingredients).filter(([key]) =>
          key.includes("strMeasure")
        )
      )
    );

    const ingredientTab = ingredientsList.map((ingredient) =>
      Object.values(ingredient).map((oneIng) => oneIng)
    );
    const mesureTab = mesuresList.map((mesure) =>
      Object.values(mesure).map((oneMes) => oneMes)
    );
    let ingCount = 1;

    ingredientTab.map((allIng, index) =>
      allIng.forEach((oneIng, index2) => {
        ingCount = 1;
        ingredientTab.map((allIngFilter, indexFilter) =>
          allIngFilter.forEach((oneIngFilter, indexFilter2) => {
            if (
              !oneIngFilter ||
              oneIngFilter.includes("null") ||
              oneIngFilter.charAt(0) === " "
            ) {
              ingredientTab[indexFilter].splice(indexFilter2, 1);
              mesureTab[indexFilter].splice(indexFilter2, 1);
            }
            if (oneIngFilter === oneIng && index !== indexFilter) {
              ingCount += 1;
              ingredientTab[index][index2] = `${oneIng} x${ingCount}`;
              ingredientTab[indexFilter].splice(indexFilter2, 1);
              mesureTab[indexFilter].splice(indexFilter2, 1);
            }
          })
        );
      })
    );

    const foodAndMesures = mesureTab.map((mesure, index) =>
      mesure.map(
        (oneMesure, indexY) => `${oneMesure} ${ingredientTab[index][indexY]}`
      )
    );

    setAllIngredient(foodAndMesures);
  };

  useEffect(() => {
    if (shoppingList) {
      setList();
    }
  }, [shoppingList]);

  const generatePDF = () => {
    const pdf = new JsPDF("portrait", "pt", "a4", [297, 210]);
    pdf.html(document.querySelector(".ingredientsComponent")).then(() => {
      pdf.save("ShoppingList.pdf");
    });
  };

  // ------------------------------------affichage-----------------------------------------------
  return (
    <div className="shoppingList">
      <h1 className="shoppingListTitle">SHOPPING LIST</h1>
      <h2 className="mealsTitle">Meals :</h2>
      <div className="mealsComponent">
        {shoppingList &&
          shoppingList.map((element) => (
            <Meals
              mealName={element.strMeal}
              mealPicture={element.strMealThumb}
            />
          ))}
      </div>
      <h2 className="ingredientsTitle">Ingredients :</h2>
      <div className="ingredientsComponent">
        {allIngredient &&
          allIngredient.map((element) => <Ingredients ingredients={element} />)}
      </div>
      <Button
        content="EXPORT TO PDF"
        myClass="exportBtn"
        myHandle={generatePDF}
      />
    </div>
  );
}

export default ShoppingList;

ShoppingList.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ShoppingList.defaultProps = {
  shoppingList: null,
};
