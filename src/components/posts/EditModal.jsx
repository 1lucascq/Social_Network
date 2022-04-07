import {
  Card,
  CardHeader, FormControl, Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editPostAction } from "../../actions";
import Buttons from "../general/Buttons";
import Inputs from "../general/Inputs";
import LargeInputs from "../general/LargeInputs";

export default function EditModal({postData}) { 
  const [title, setTitle] = useState(postData.title);
  const [content, setContent] = useState(postData.content);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (title && content) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [title, content]);

  const handleButton = () => {
    dispatch(
      editPostAction({
          title,
          content,
          postedAt: postData.postedAt,
      })
    );
    setTitle('');
    setContent('');
  };

  return (
      <Card>
        <CardHeader
          title={
            <Typography align="left" variant="h6">
              Edit Post
            </Typography>
          }
        />

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
  );
}

EditModal.propTypes = {
  postData: PropTypes.shape({
    content: PropTypes.string,
    title: PropTypes.string,
    postedAt: PropTypes.number
  }).isRequired
}
