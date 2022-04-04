import PropTypes from "prop-types"
import React from "react";

export default function Inputs({name, text, value, handleFunction}) {
  return (
    <label htmlFor={name}>
      {text}:
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleFunction(e.target.value)}
      />
    </label>
  );
}

Inputs.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
