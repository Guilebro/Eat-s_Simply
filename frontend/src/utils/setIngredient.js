const setIngredient = (handleSet, recipe) => {
  const ingredientsList = Object.fromEntries(
    Object.entries(recipe).filter(([key]) => key.includes("strIngredient"))
  );
  const mesuresList = Object.fromEntries(
    Object.entries(recipe).filter(([key]) => key.includes("strMeasure"))
  );

  const ingredientTab = Object.values(ingredientsList).map(
    (ingredient) => ingredient
  );
  const mesureTab = Object.values(mesuresList).map((mesure) => mesure);

  ingredientTab.forEach((ingredient, index) => {
    const mesure = mesureTab[index];
    ingredientTab[index] = `${mesure} ${ingredient}`;
  });

  const allIngredient = ingredientTab.filter(
    (ingredient) =>
      !(
        !ingredient ||
        ingredient.includes("null") ||
        ingredient.charAt(0) === " "
      )
  );
  handleSet(allIngredient);
};

export default setIngredient;
