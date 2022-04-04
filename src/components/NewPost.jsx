import React, { useEffect, useState } from 'react'
import Inputs from './Inputs'
import TextAreas from './TextAreas';
import Buttons from '../components/Buttons';


export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (title && content) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [title, content]);

  const handleButton = (e) => {
    e.preventDefault();
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
