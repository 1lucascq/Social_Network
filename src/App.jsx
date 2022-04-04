import React from 'react';
import SignUp from './pages/SignUp';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <Routes>
      <Route index element={<SignUp/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
  );
}

export default App;
