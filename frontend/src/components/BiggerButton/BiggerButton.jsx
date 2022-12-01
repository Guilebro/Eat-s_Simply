import "./BiggerButton.css";
import PropTypes from "prop-types";

function BiggerButton({ content, src, imgClass, myClass, myHandle }) {
  return (
    <button
      type="button"
      className={`biggerButton ${myClass}`}
      onClick={myHandle}
    >
      {content}
      {src && <img src="/Icon/email.png" alt={content} className={imgClass} />}
    </button>
  );
}

export default BiggerButton;

BiggerButton.propTypes = {
  content: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  myClass: PropTypes.string.isRequired,
  myHandle: PropTypes.func.isRequired,
};
