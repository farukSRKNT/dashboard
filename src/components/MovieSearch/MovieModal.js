import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch} from 'react-redux'
import {Modal, Typography} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios'
import { changeLastReviewedMovie, increaseReviewedMovieCount } from '../../actions';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const randomNumber = rand()
    const top = 50 + randomNumber
    const left = 50 + randomNumber
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 'calc(100% - 70px)',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  moviePosterWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  moviePoster: {
    width: '250px',
    height: '400px',
    objectFit: 'contain'
  },
  closeIconWrapper: {
    display: 'flex',
  },
  closeIcon: {
      marginLeft: 'auto',
      cursor: 'pointer'
  }
}));

const fetchMovie = (dispatch, movieID, setMovie) => {
    axios.get(`https://www.omdbapi.com/?apikey=2d2d7142&i=${movieID}`)
    .then(response => {
        if (response.data && response.data.Response === 'True') {
            const movie = response.data
            setMovie(movie)
            dispatch(increaseReviewedMovieCount())
            dispatch(changeLastReviewedMovie(movie.Title))
        } else {
            console.error('RESPONSE IS FALSE')
        }
    }).catch(err => {
        console.error(err)
    })
}

export default function MovieModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [movie, setMovie] = useState({})
   // getModalStyle is not a pure function, we roll the style only on the first render
   const [modalStyle] = useState(getModalStyle);

   useEffect(() => {
       if (!props.open) return

       fetchMovie(dispatch, props.movieID, setMovie)
   }, [props.open])

   console.log(movie)
  const body = (
    <div style={modalStyle} className={classes.paper}>
        <div className={classes.closeIconWrapper}>
            <CloseIcon className={classes.closeIcon} onClick={props.onClose}/>
        </div>
        <div className={classes.moviePosterWrapper}>
            <img src={movie.Poster} alt="poster" className={classes.moviePoster}/>
        </div>
        <h2 id="simple-modal-title">{movie.Title}</h2>
        <Typography>Actors: {movie.Actors}</Typography>
        <Typography>Country: {movie.Country}</Typography>
        <Typography>Director: {movie.Director}</Typography>
        <Typography>Genre: {movie.Genre}</Typography>
        <Typography>Time: {movie.Runtime}</Typography>
        <Typography>IMDB Rating: {movie.imdbRating}</Typography>
    </div>
  );

  return (
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}
