import PropTypes from "prop-types";

function RedCross({ dataerror }) {
  return (
    <div className="errorInputContainer" dataerror={dataerror}>
      <img src="/Icon/redcross.png" alt="Red Cross" className="redCross" />
    </div>
  );
}

export default RedCross;

RedCross.propTypes = {
  dataerror: PropTypes.string.isRequired,
};
