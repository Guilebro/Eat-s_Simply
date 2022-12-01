/* eslint-disable import/no-unresolved */
import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ShoppingList from "@components/shoppingList/ShoppingList";

function ShoppingListPage({ shoppingList }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <ShoppingList shoppingList={shoppingList} />
    </motion.div>
  );
}

export default ShoppingListPage;

ShoppingListPage.propTypes = {
  shoppingList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ShoppingListPage.defaultProps = {
  shoppingList: null,
};
