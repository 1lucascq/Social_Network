import PropTypes from "prop-types"
import React from 'react'

export default function Buttons({disabled, text, handleFunction}) {
  return (
    <button
      disabled={ disabled }
      type="button"
      onClick={ handleFunction !== null && handleFunction }
    >
      {text}
    </button>
  );
}

Buttons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleFunction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
