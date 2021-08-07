import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    moviesWrapper: {
        width: '363px',
        padding: '30px 23px'
    },
    movie: {
        display: 'flex',
        fontSize: '15px',
        alignItems: 'center',
        marginTop: '18px',
        '&:last-child $movieInfoWrapper': {
            borderBottom: 'none'
        }
    },
    movieInfoWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: '1',
        marginRight: '23px',
        marginLeft: '18px',
        height: '35px',
        borderBottom: '1px solid #DDE9FB'
    },
    movieName: {
        color: '#4C8DEB'
    },
  }))

export default function MovieItem(props) {
    const classes = useStyles()

    return (
        <div className={classes.movie}>
            <span>{props.index + 1}</span>
            <div className={classes.movieInfoWrapper}>
                <span className={classes.movieName}>{props.movie.name}</span>
                <span className={classes.year}>{props.movie.year}</span>
                <span className={classes.source}>{props.movie.source}</span>
            </div>
        </div>
    )
}