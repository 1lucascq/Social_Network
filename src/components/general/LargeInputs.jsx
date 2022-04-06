import { TextField } from "@mui/material"
import PropTypes from "prop-types"
import React from 'react'

export default function LargeInput({name, label, value, handleFunction}) {
  return (
    <TextField
      id="outlined-multiline-static"
      label={label}
      name={name}
      multiline
      rows={4}
      value={value}
      onChange={(e) => handleFunction(e.target.value)}
      sx={{ my: '1em' }}
    />  
  )
}

LargeInput.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
