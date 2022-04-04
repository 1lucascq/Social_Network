import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signUpAction } from '../actions';
import Buttons from '../components/Buttons';
import Input from '../components/Input';

function SignUp() {
  const [username, setUsername] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  console.log(navigate)
  useEffect(() => {
    if (username) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [username])
  
  const handleButton = (e) => {
    e.preventDefault();
    dispatch(signUpAction(username));
    navigate('/main')
  }

  return (
    <div className="App">
      {`signup, ${username}`}
      <Input name="username" text="Please enter your username" value={username} handleFunction={setUsername} />
      <Buttons disabled={disabled} text="Enter" handleFunction={handleButton}/>
    </div>
  );
}

export default SignUp;