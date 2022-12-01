/* eslint-disable import/no-unresolved */
import SimplyMenu from "@components/SimplyMenu/SimplyMenu";
import BiggerButton from "@components/BiggerButton/BiggerButton";
import Title from "@components/Title/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  const [rollMenu, setRollMenu] = useState(false);
  const [allCategory, setAllCategory] = useState();
  const [starter, setStarter] = useState();
  const [meal, setMeal] = useState();
  const [dessert, setDessert] = useState();
  const [menu, setMenu] = useState();
  const randomer = (max) => {
    return Math.floor(Math.random() * max);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/mealCategories")
      .then((response) => response.data)
      .then((data) => {
        setAllCategory(data.categories);
      });
  }, []);

  const wichCategory = () => {
    let indexCategory = Math.floor(Math.random() * allCategory.length);
    while (
      indexCategory === 2 ||
      indexCategory === 8 ||
      indexCategory === 9 ||
      indexCategory === 12
    ) {
      indexCategory = Math.floor(Math.random() * allCategory.length);
    }
    return indexCategory;
  };

  const getMenu = () => {
    const indexCategory = wichCategory();
    axios
      .get("http://localhost:3000/filterByCategory?c=Starter")
      .then((response) => response.data)
      .then((data) => {
        setStarter(data.meals[randomer(data.meals.length)]);
      });
    axios
      .get(
        `http://localhost:3000/filterByCategory?c=${allCategory[indexCategory].strCategory}`
      )
      .then((response) => response.data)
      .then((data) => {
        setMeal(data.meals[randomer(data.meals.length)]);
      });
    axios
      .get(`http://localhost:3000/filterByCategory?c=Dessert`)
      .then((response) => response.data)
      .then((data) => {
        setDessert(data.meals[randomer(data.meals.length)]);
      });
  };
  const handleReload = () => {
    setRollMenu(!rollMenu);
  };

  useEffect(() => {
    if (allCategory) {
      getMenu();
    }
  }, [rollMenu, allCategory]);

  useEffect(() => {
    if (starter && meal && dessert) {
      setMenu([starter, meal, dessert]);
    }
  }, [starter, meal, dessert]);

  return (
    <motion.div
      className="homePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <div className="homeGrid">
        <div className="homeBG" />
        <div className="homeContainer">
          <Title title="SIMPLY MENU" />
          {menu && <SimplyMenu menu={menu} />}
          <div className="home">
            <button type="button" onClick={handleReload} className="reloadBtn">
              <img
                src="../../../public/Icon/reload.png"
                alt=""
                className="reloadPic"
              />
            </button>
            <h2 className="homeOr">OR</h2>
            <NavLink to="./filterPage">
              <BiggerButton
                content="SELECT BY FILTER"
                myClass="goToFilterBtn"
              />
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
