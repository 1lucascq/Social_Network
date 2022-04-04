import PropTypes from "prop-types"
import React from "react";

export default function Input({name, text, value, handleFunction}) {
  return (
    <div>
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
    </div>
  );
}

Input.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
