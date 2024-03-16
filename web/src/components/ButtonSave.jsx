import PropTypes from "prop-types";

function ButtonSave({ text, onSubmit }) {
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <button className="button--large" onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonSave.propTypes = {
  text: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonSave;
