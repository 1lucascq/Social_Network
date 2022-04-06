import React from 'react'
import { useSelector } from 'react-redux';
import { newPostAction } from '../../actions';
import Post from './Post'

export default function PostSection() {
  const { payload } = useSelector(newPostAction);
  return (
    <>
      {payload.posts.map(({ post, user }, i) => {
        return (
          <Post 
          key={user.id + i}
          title={post.title}
          user={`@${user.username}`}
          postedAt={post.postedAt}
          content={post.content}
          />
        )
      })}    
    </>
  )
}
