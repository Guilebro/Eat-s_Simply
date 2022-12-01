/* eslint-disable import/no-unresolved */
import PropTypes from "prop-types";
import Carousel from "@components/carousel/Carousel";
import { motion } from "framer-motion";
import "./Favorite.css";

function Favorite({ favorite }) {
  return (
    <motion.div
      className="favoritePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <Carousel selectionArray={favorite} />
    </motion.div>
  );
}

export default Favorite;

Favorite.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

Favorite.defaultProps = {
  favorite: null,
};
