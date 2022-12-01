const axios = require("axios");

const getMealByName = (req, res) => {
  const mealName = req.params.name;
  const url = `http://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  axios.get(url).then((response) => res.send(response.data));
};

const getMealByLetter = (req, res) => {
  const { letter } = req.params;
  const url = `http://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  axios.get(url).then((response) => res.send(response.data));
};

const getMealById = (req, res) => {
  const { id } = req.params;
  const url = `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${Number(
    id
  )}`;
  axios.get(url).then((response) => res.send(response.data));
};

const getRandomMeal = (_, res) => {
  axios
    .get("http://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => res.send(response.data));
};
const getAllMealCategories = (_, res) => {
  axios
    .get("http://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => res.send(response.data));
};
const getCategories = (_, res) => {
  axios
    .get("http://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => res.send(response.data));
};
const getAreas = (_, res) => {
  axios
    .get("http://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then((response) => res.send(response.data));
};
const getIngredients = (_, res) => {
  axios
    .get("http://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then((response) => res.send(response.data));
};
const getFilterByIngredient = (req, res) => {
  const ingredient = req.query.i;
  axios
    .get(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    .then((response) => res.send(response.data));
};
const getFilterByCategory = (req, res) => {
  const category = req.query.c;
  axios
    .get(`http://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => res.send(response.data));
};
const getFilterByArea = (req, res) => {
  const area = req.query.a;
  axios
    .get(`http://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    .then((response) => res.send(response.data));
};

module.exports = {
  getMealByName,
  getMealByLetter,
  getMealById,
  getRandomMeal,
  getAllMealCategories,
  getCategories,
  getAreas,
  getIngredients,
  getFilterByIngredient,
  getFilterByCategory,
  getFilterByArea,
};
