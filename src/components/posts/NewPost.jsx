import {
  Card,
  CardHeader,
  Container,
  FormControl, Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPostAction, signUpAction } from "../../actions";
import Buttons from "../general/Buttons";
import Inputs from "../general/Inputs";
import LargeInputs from "../general/LargeInputs";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const { payload } = useSelector(signUpAction);

  useEffect(() => {
    if (title && content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content]);

  const handleButton = () => {
    dispatch(
      newPostAction({
        user: {
          username: payload.user.username,
          id: payload.user.id,
        },
        post: {
          title,
          content,
          postedAt: new Date(),
        },
      })
    );
  };

  return (
    <Container>
      <Card>
        <CardHeader
          title={
            <Typography align="left" variant="h6">
              What's on your mind?
            </Typography>
          }
        />

        {/* <Inputs name="title" label="Title" value={title} handleFunction={setTitle} /> */}
        <FormControl 
          fullWidth
          margin='normal'
          sx={{ p:'1em', alignItems:'space-between' }}
        >
          <Inputs
            name="title"
            label="Title"
            value={title}
            handleFunction={setTitle}
          />

          <LargeInputs
            name="content"
            label="Content"
            value={content}
            handleFunction={setContent}
          />
          <Buttons
            disabled={disabled}
            text="Enter"
            handleFunction={handleButton}
          />
        </FormControl>
      </Card>
    </Container>
  );
}

// <>
// <h5>What's on your mind?</h5>
// <form>
//   <Inputs name="title" text="Title" value={title} handleFunction={setTitle} />
//   <TextAreas name="content" text="Content" value={content} handleFunction={setContent} />
//   <Buttons disabled={disabled} text="Enter" handleFunction={handleButton}/>
// </form>

// </>
