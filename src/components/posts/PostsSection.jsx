import React from 'react'
import { useSelector } from 'react-redux';
import { newPostAction } from '../../actions';
import Post from './Post'

export default function PostSection() {
  const { payload } = useSelector(newPostAction);
  
  const sortPosts = () => {
    if (payload.posts.length > 1) {
      return payload.posts.slice().sort((a, b) => b.post.postedAt - a.post.postedAt)
    }
    return payload.posts;
  }
  const sortedPosts = sortPosts();

  return (
    <>
      {sortedPosts.map(({ post, user }, i) => {
        return (
          <Post 
            key={user.id + i}
            userId={user.id}
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
