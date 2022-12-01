/* eslint-disable import/order */
import Carousel from "../../components/carousel/Carousel";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Result({ selectionArray, musicArea }) {
  return (
    <motion.div
      className="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <Carousel selectionArray={selectionArray} musicArea={musicArea} />
    </motion.div>
  );
}

export default Result;

Result.propTypes = {
  selectionArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  musicArea: PropTypes.string.isRequired,
};
