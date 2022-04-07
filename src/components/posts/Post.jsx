import {
  Card,
  CardHeader,
  Container, Grid, Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { newPostAction } from "../../actions";
import { getElapsedTime } from "../../helpers/getElapsedTime";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Post({ title, user, postedAt, content, userId }) {
  const { payload } = useSelector(newPostAction);
  const [isAuthor, setIsAuthor] = useState(false);

  const serializeContent = (content) => {
    if (content.endsWith('.') || content.endsWith('?') || content.endsWith('!')) {
      return content;
    }
    return content + '.';
  }
  
  useEffect(() => {
    if (payload.user.id === userId) {
      setIsAuthor(true);
    }
  }, []);

  const elapsedTime = getElapsedTime(postedAt);
  return (
    <Container sx={{ my: "3em" }}>
      <Card>
        <CardHeader
          title={
            <Typography color="primary.contrastText" align="left" variant="h6" sx={{ px:'.6em' }}>
              {title}
            </Typography>
          }
          action={
            isAuthor && (
              <Grid display='flex' pr='.7em'>

                <DeleteModal postedAt={postedAt}/>
                <EditModal postData={{ title, content, postedAt  }} />

              </Grid>
            )
          }
          sx={{ backgroundColor: "primary.main" }}
        />

        <Grid container justifyContent="space-between" p="1em">
          <Grid item>
            <Typography align="left" variant="subtitle2" color="primary.light" px='1em'>
              {user}
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="subtitle2" color="primary.light" px='1em'>
              {elapsedTime}
            </Typography>
          </Grid>
        </Grid>

        <Typography align="justify" paragraph py='1em' px="1.9em">
          {serializeContent(content)}
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
