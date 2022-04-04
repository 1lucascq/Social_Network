import PropTypes from "prop-types"
import React from 'react'

export default function Buttons({disabled, text, handleFunction}) {
  return (
    <button
      disabled={ disabled }
      type="button"
      onClick={ (e) => handleFunction(e)}
    >
      {text}
    </button>
  );
}

Buttons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
}
