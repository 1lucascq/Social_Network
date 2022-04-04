import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { signUpAction } from '../actions';
// import Buttons from '../components/Buttons';
import Input from '../components/Input';

function SignUp() {
  const [username, setUsername] = useState('');
  // const [disabled, setDisabled] = useState(true);
  // // const username = useSelector(state => state.signUp.username);
  // const dispatch = useDispatch(signUpAction);
  // if (username) {
  //   setDisabled(false)
  // } else {
  //   setDisabled(true)
  // }

  return (
    <div className="App">
      {`signup, ${username}`}
      <Input name="username" text="Please enter your username" value={username} handleFunction={setUsername} />
      {/* <Buttons disabled={disabled} text="Enter" dispatch={dispatch} /> */}
    </div>
  );
}

export default SignUp;