import React from 'react';
import Header from '../components/general/Header';
import NewPost from '../components/posts/NewPost';
import PostSection from '../components/posts/PostsSection';
// import { useDispatch } from 'react-redux';

function Main() {
  // const dispatch = useDispatch();

  return (
    <>
      <Header />
      <NewPost />
      <PostSection />
    </>
  );
}

export default Main;
