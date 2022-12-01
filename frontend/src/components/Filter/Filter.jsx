import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Filter({ category, clickCategory, mouseOver, mouseOut, hooverText }) {
  return (
    <motion.div
      className="filter-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <img
        className="icon"
        src={`Icon/${category}.png`}
        alt={category}
        onMouseOver={mouseOver}
        onFocus={mouseOver}
        onTouchStart={mouseOver}
        onMouseOut={mouseOut}
        onBlur={mouseOut}
        onTouchEnd={mouseOut}
        onClick={(e) => clickCategory(e.target.alt)}
        role="none"
      />
      <h3
        className={
          category === hooverText ? "category-notHidden" : "category-hidden"
        }
      >
        {category}
      </h3>
    </motion.div>
  );
}
export default Filter;

Filter.propTypes = {
  category: PropTypes.string.isRequired,
  hooverText: PropTypes.string.isRequired,
  clickCategory: PropTypes.func.isRequired,
  mouseOver: PropTypes.func.isRequired,
  mouseOut: PropTypes.func.isRequired,
};
