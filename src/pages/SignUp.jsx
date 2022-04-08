import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { signUpAction } from "../actions";
import Buttons from "../components/general/Buttons";
import Inputs from "../components/general/Inputs";

function SignUp() {
  const [username, setUsername] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (username) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username]);

  const handleButton = () => {
    dispatch(
      signUpAction({
        username,
        id: uuidv4(),
      })
    );
    navigate('/main');
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh' }}
    >
      <Grid
        container
        direction='column'
        alignItems='left'
        justifyContent='space-between'
        sx={{ backgroundColor: '#FFFFFF', width:'30em', height:'15em', padding:'1.5em' }}
      >
        <Typography variant='h6'>Welcome to CodeLeap Network!</Typography>

        <Inputs
          name='username'
          label='Please enter your username:'
          value={username}
          handleFunction={setUsername}
        />
        <Buttons
          disabled={disabled}
          text='Enter'
          handleFunction={handleButton}
        />
      </Grid>
    </Grid>
  );
}

export default SignUp;
