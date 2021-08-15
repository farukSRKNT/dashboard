import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    movie: {
        display: 'flex',
        fontSize: '15px',
        alignItems: 'center',
        marginTop: '18px',
        '&:last-of-type $movieInfoWrapper': {
            borderBottom: 'none'
        }
    },
    movieInfoWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: '1',
        marginLeft: '18px',
        height: '35px',
        borderBottom: '1px solid #DDE9FB'
    },
    movieName: {
        color: '#4C8DEB',
        maxWidth: '270px',
        marginRight: 'auto',
        cursor: 'pointer' 
    },
    year: {
        display: 'flex',
        justifyContent: 'center',
        width: '82px',
    },
    source: {
    }
  }))

export default function MovieItem(props) {
    const classes = useStyles()

    return (
        <div className={classes.movie}>
            <span>{props.index + 1}</span>
            <div className={classes.movieInfoWrapper}>
                <span className={classes.movieName} onClick={() => props.openMovieModal(props.movie.imdbID)}>{props.movie.Title}</span>
                <span className={classes.year}>{props.movie.Year}</span>
                <span className={classes.source}>{props.movie.imdbID}</span>
            </div>
        </div>
    )
}