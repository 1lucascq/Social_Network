import PropTypes from "prop-types"
import React from 'react'
import { getElapsedTime } from "../../helpers/getElapsedTime"

export default function Post({title, user, postedAt, content}) {
  const elapsedTime = getElapsedTime(postedAt);
  
  return (
    <>
      <header>
        <h3>{title}</h3>
      </header>
      <section>
        <h6>{user}</h6>
        <h6>{elapsedTime}</h6>
      </section>
      <section>
        <p>{content}</p>
      </section>
    </>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  postedAt: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}
