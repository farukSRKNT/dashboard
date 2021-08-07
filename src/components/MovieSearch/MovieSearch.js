import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import SearchBar from "../SearchBar";
import MovieItem from "./MovieItem";

const data = [
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    },
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    },
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    },
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    },
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    },
    {
        name: 'Batman Begins',
        year: '2010',
        source: 'Imdb'
    }
 ]

const useStyles = makeStyles((theme) => ({
    movieSearchWrapper: {
        width: '540px',
        padding: '30px 23px'
    },
    movieSearhBar: {
        display: 'flex',
    },
    title: {
        fontSize: '20px'
    }
  }))

export default function Movies(Props) {
    const classes = useStyles()

    return (
        <div className={classes.movieSearchWrapper}>
            <div className={classes.movieSearhBar}>
                <span className={classes.title}>Movies</span>
                <SearchBar />
                <SearchBar  width="4ch" />
                <Button variant="contained" color="primary">
                    Search 
                </Button>
            </div>
            {data.map((movie, index) => (
                <MovieItem key={`searched-movie-${index}`} movie={movie} index={index}/>
            ))}
        </div>
    )
}