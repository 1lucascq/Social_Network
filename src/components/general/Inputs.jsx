import { TextField } from "@mui/material";
import PropTypes from "prop-types"
import React from "react";

export default function Inputs({name, label, value, handleFunction}) {
  return (
    <TextField
    id="outlined-basic"
    variant="outlined"
    type="text"
    label={label}
    name={name}
    defaultValue={value}
    onChange={(e) => handleFunction(e.target.value)}
    required
  />
    
  //   <label htmlFor={name}>
  //     {label}:
  //     <input
  //       id={name}
  //       type="text"
  //       name={name}
  //       value={value}
  //       onChange={(e) => handleFunction(e.target.value)}
  //     />
  //   </label>
  );
}

Inputs.propTypes = {
  handleFunction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}
