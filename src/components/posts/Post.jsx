import { Card, CardHeader, Container, Grid, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { getElapsedTime } from "../../helpers/getElapsedTime";
import deleteIcon from '../../assets/delete.svg'
import editIcon from '../../assets/edit.svg'
import { useSelector } from "react-redux";
import { newPostAction } from "../../actions";

export default function Post({ title, user, postedAt, content, userId }) {
  const { payload } = useSelector(newPostAction);
  const [isAuthor, setIsAuthor] = useState(false)
  console.log(payload)
  console.log(userId)

  useEffect(() => {
    if(payload.user.id === userId) {
      setIsAuthor(true);
    }
  }, [])
  
  const elapsedTime = getElapsedTime(postedAt);
  return (
    <Container sx={{ my: '3em' }}>

      <Card>
        <CardHeader
          title={
            <Typography color='primary.contrastText' align='left' variant='h6'>{title}</Typography>
          }
          action={
            isAuthor &&
            <Grid>
              <IconButton
                aria-label="delete" sx={{ mr: '.5em' }}
                onClick={ () => console.log('bla') }
              >
                <img
                  alt="delete icon"
                  src={ deleteIcon }
                />
              </IconButton>
              
              <IconButton
                aria-label="edit"
                onClick={ () => console.log('bla') }
              >
                <img
                  alt="edit icon"
                  src={ editIcon }
                />
              </IconButton>
            </Grid>
          }
          sx={{ backgroundColor: 'primary.main' }}
        />
        <Grid container justifyContent="space-between" p='1em'>
          <Grid item>
            <Typography align="left" variant="subtitle2" color='primary.light'>
              {user}
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="subtitle2" color='primary.light'>
              {elapsedTime}
            </Typography>
          </Grid>
        </Grid>

        <Typography align="justify" paragraph p='1em'>
          {content} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, maiores? Natus ullam aperiam tempore ipsam, maiores expedita harum quasi facilis doloribus ipsa ut praesentium eos illum, vitae perspiciatis. Optio, ratione.
          {/* TODO: delete lorem text */}
        </Typography>

      </Card>
    </Container>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  postedAt: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
