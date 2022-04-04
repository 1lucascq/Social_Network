import PropTypes from "prop-types"
import React from 'react'

export default function PostBody({user, date, text}) {
  return (
    <>
      <section>
        <h6>{user}</h6>
        <h6>{date}</h6>
      </section>
      <section>
        <p>{text}</p>
      </section>
    </>
  )
}

PostBody.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}
