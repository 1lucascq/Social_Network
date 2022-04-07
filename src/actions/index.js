import { createAction } from '@reduxjs/toolkit'

export const signUpAction = createAction('user/signUp');

export const newPostAction = createAction('posts/newPost');

export const editPostAction = createAction('posts/editPost');

export const deletePostAction = createAction('posts/deletePost');
