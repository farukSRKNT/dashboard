import React from 'react'
import StarIcon from '../../assets/icons/star.svg'
import useStyles from './styles'

const data = [
  { name: 'lorem ipsum dolar sit amet', score: 9.2 },
  { name: 'lorem ipsum dolar sit amet', score: 9.2 },
  { name: 'lorem ipsum dolar sit amet', score: 9.2 },
  { name: 'lorem ipsum dolar sit amet', score: 9.2 },
  { name: 'lorem ipsum dolar sit amet', score: 9.2 },
]

export default function TopMovies() {
  const classes = useStyles()

  return (
    <div className={classes.moviesWrapper}>
      <div className={classes.title}>Top Movies</div>
      {data.map((movie, index) => (
        <div key={`movie-${index}`} className={classes.movie}>
          <span>{index + 1}</span>
          <div className={classes.movieInfoWrapper}>
            <span className={classes.movieName}>{movie.name}</span>
            <div className={classes.scoreWrapper}>
              <img src={StarIcon} height={20} width={16} alt="" />
              <span className={classes.score}>{movie.score}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
