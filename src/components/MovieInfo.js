import React from 'react'
import { numberWithCommas } from '../helpers'

const MovieInfo = props => {
  const {
    title,
    popularity,
    overview,
    release_date,
    vote_average,
    vote_count,
    poster_path,
  } = props.movie

  return (
    <div className="movie-info">
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : '/images/default_poster.jpg'
          }
          alt=""
          className="poster-img"
        />
      </div>
      <div className="movie-info-card-right">
        <div>
          <h2>
            {title} ({release_date.split('-')[0]})
          </h2>
          <p>{overview}</p>
        </div>
        <div className="scores-ratings">
          <p>Popularity Score: {popularity}</p>
          <p>
            Viewer Rating: {vote_average}/10 ({numberWithCommas(vote_count)}{' '}
            total votes)
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
