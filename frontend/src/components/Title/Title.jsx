import PropTypes from "prop-types";
import "./Title.css";

function Title({ title, myClass, myContainerClass }) {
  return (
    <div className={`titleContainer ${myContainerClass}`}>
      <h2 className={`title ${myClass}`}>{title}</h2>
      <div className="titleLine" />
      <div className="titleLine" id="secondTitleLine" />
    </div>
  );
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
  myClass: PropTypes.string,
  myContainerClass: PropTypes.string,
};

Title.defaultProps = {
  myClass: null,
  myContainerClass: null,
};
