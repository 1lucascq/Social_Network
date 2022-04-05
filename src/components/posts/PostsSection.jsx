import React from 'react'
import { useSelector } from 'react-redux';
import { newPostAction } from '../../actions';
import Post from './Post'

export default function PostSection() {
  const { payload } = useSelector(newPostAction);
  // console.log(payload)
  return (
    <>
      {payload.posts.map(({ post, user }) => {
        return (
          <Post 
          key={user.id}
          title={post.title}
          user={user.username}
          postedAt={post.postedAt}
          content={post.content}
          />
        )
      })}    
    </>
  )
}
