const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const mealControllers = require("./controllers/mealController");

router.get("/mealByName/:name", mealControllers.getMealByName);
// http://localhost:3000/mealByName/Arrabiata
router.get("/mealByLetter/:letter", mealControllers.getMealByLetter);
// http://localhost:3000/mealByLetter/l
router.get("/mealDetails/:id", mealControllers.getMealById);
// http://localhost:3000/mealDetails/52772
router.get("/mealRandom", mealControllers.getRandomMeal);
router.get("/mealCategories", mealControllers.getAllMealCategories);
router.get("/categories", mealControllers.getCategories);
router.get("/areas", mealControllers.getAreas);
router.get("/ingredients", mealControllers.getIngredients);
router.get("/filterByIngredient", mealControllers.getFilterByIngredient);
// http://localhost:3000/filterByIngredient?i=chicken_breast
router.get("/filterByCategory", mealControllers.getFilterByCategory);
// http://localhost:3000/filterByCategory?c=Seafood
router.get("/filterByArea", mealControllers.getFilterByArea);
// http://localhost:3000/filterByArea?a=Canadian

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
