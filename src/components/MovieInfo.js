import React from 'react'

const MovieInfo = props => {
  const {
    title,
    popularity,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = props.movie

  return (
    <div>
      <h2>{title}</h2>
      <p>Popularity Rating: {popularity}</p>
      <p>Overview: {overview}</p>
      <p>Release Date: {release_date}</p>
      <p>
        Rating: {vote_average}/10 ({vote_count} total votes)
      </p>
    </div>
  )
}

export default MovieInfo
