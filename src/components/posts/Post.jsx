import { Card, CardHeader, Container, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { getElapsedTime } from "../../helpers/getElapsedTime";

export default function Post({ title, user, postedAt, content }) {
  const elapsedTime = getElapsedTime(postedAt);
  return (
    <Container sx={{ my: '3em' }}>

      <Card>
        <CardHeader
          title={
            <Typography color='primary.contrastText' align='left' variant='h6'>{title}</Typography>
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
  postedAt: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
