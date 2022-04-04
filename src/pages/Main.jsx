import React from 'react';
import Header from '../components/Header';
import NewPost from '../components/NewPost';
// import { useDispatch } from 'react-redux';

function Main() {
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <NewPost />
    </>
  );
}

export default Main;
