/* eslint-disable import/no-unresolved */
import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import navigation from "../../utils/navigation";
import SearchBar from "./Searchbar";

function Navbar({ shopListNumber, favoriteNumber }) {
  const [shopListNumberScale, setShopListNumberScale] = useState("");
  const [favoriteNumberScale, setFavoriteNumberScale] = useState("");

  useEffect(() => {
    setShopListNumberScale("NumberScale");
    setTimeout(() => setShopListNumberScale(""), 1000);
  }, [shopListNumber]);

  useEffect(() => {
    setFavoriteNumberScale("NumberScale");
    setTimeout(() => setFavoriteNumberScale(""), 1000);
  }, [favoriteNumber]);

  return (
    <div className="navbar">
      <div className="navTitle">
        <NavLink to="/" className="navLinkTitle">
          EAT'S SIMPLY
        </NavLink>
      </div>
      {window.matchMedia("screen and (min-width: 1024px)").matches && (
        <SearchBar searchBarClass="desktopSearchBar" />
      )}
      <div className="iconNavbar">
        {navigation.map((nav) => (
          <Link key={nav.id} to={nav.route} className="iconNavlink">
            <img src={nav.src} alt={nav.label} className="icon-nav" />
            {nav.id === 3 && shopListNumber > 0 && (
              <div className="shopListNumber" id={shopListNumberScale}>
                {shopListNumber}
              </div>
            )}
            {nav.id === 4 && favoriteNumber > 0 && (
              <div className="favoriteNumber" id={favoriteNumberScale}>
                {favoriteNumber}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  shopListNumber: PropTypes.number,
  favoriteNumber: PropTypes.number,
};

Navbar.defaultProps = {
  shopListNumber: null,
  favoriteNumber: null,
};
