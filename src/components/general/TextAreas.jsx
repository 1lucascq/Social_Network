import PropTypes from "prop-types"
import React from 'react'

export default function TextAreas({name, text, value, handleFunction}) {
  return (
    <label htmlFor={name}>
      {text}:
      <textarea
        id={name}
        type="text"
        name={name}
        value={value}
        onChange={(e) => handleFunction(e.target.value)}
      />
    </label>
  )
}

TextAreas.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
