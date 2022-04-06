import { Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function Buttons({ disabled, text, handleFunction }) {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      sx={{ width:'7em', height:'1em',  padding:'1.5em', alignSelf: 'flex-end' }}
      onClick={(e) => handleFunction(e)}
    >
      {text}
    </Button>
  );
}

Buttons.propTypes = {
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  handleFunction: PropTypes.func.isRequired,
};
