/* eslint-disable import/no-unresolved */
import "./App.css";
import "./main.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SearchBar from "@components/Navbar-Searchbar/Searchbar";
import Navbar from "./components/Navbar-Searchbar/Navbar";
import Transition from "./components/Navbar-Searchbar/Transition";
import LoadingPage from "./components/LoadingPage/LoadingPage";

function App() {
  const [loading, setLoading] = useState();
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4250);
  }, []);
  const [shoppingList, setShoppingList] = useState([]);
  const handleList = (myArray) => {
    setShoppingList(shoppingList.concat(myArray));
  };
  const [favorite, setFavorite] = useState([]);
  const handleFavorite = (myArray) => {
    setFavorite(favorite.concat(myArray));
  };
  const handleNewFavorite = (myArray) => {
    setFavorite(myArray);
  };

  return (
    <div className="App">
      <Router>
        {!loading && <LoadingPage />}
        <Navbar
          shopListNumber={shoppingList.length}
          favoriteNumber={favorite.length}
        />
        {window.matchMedia("screen and (max-width: 1023px)").matches && (
          <SearchBar searchBarClass="mobileSearchBar" />
        )}
        <Transition
          handleList={handleList}
          shoppingList={shoppingList}
          favorite={favorite}
          handleFavorite={handleFavorite}
          handleNewFavorite={handleNewFavorite}
        />
      </Router>
    </div>
  );
}

export default App;
