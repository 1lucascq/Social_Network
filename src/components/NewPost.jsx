import React, { useEffect, useState } from 'react'
import Inputs from './Inputs'
import TextAreas from './TextAreas';
import Buttons from '../components/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { newPostAction, signUpAction } from '../actions';


export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const { payload } = useSelector(signUpAction);
  // console.log('USEREEEEEEEEEEE', payload)


  useEffect(() => {
    if (title && content) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [title, content]);

  const handleButton = () => {
    // console.log(e, dispatch, newPostAction)
    dispatch(newPostAction({
      user: {
        username: payload.user.username,
        id: payload.user.id
      },
      post: {
        title,
        content,
        postedAt: new Date().toJSON(),
      },
    }));
    // // TODO: colocar a logica de que um novo post deve ser acionado através da action o formato definido la no reducer
    // // ver formar
  };

  return (
    <>
      <h5>What's on your mind?</h5> 
      <form>
        <Inputs name="title" text="Title" value={title} handleFunction={setTitle} />
        <TextAreas name="content" text="Content" value={content} handleFunction={setContent} />
        <Buttons disabled={disabled} text="Enter" handleFunction={handleButton}/>
      </form>

    </>
  )
}
