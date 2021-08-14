import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles, Button } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { fetchMovies } from '../../actions/index'
import SearchBar from "../SearchBar";
import MovieItem from "./MovieItem";

const useStyles = makeStyles((theme) => ({
    movieSearchWrapper: {
        width: '60%',
        padding: '30px 23px'
    },
    movieSearhBar: {
        display: 'flex',
    },
    title: {
        fontSize: '20px'
    },
    searchButton: {
        height: '30px',
        width: '49px',
        backgroundColor: '#4C8DEB',
        color: 'white',
        fontSize: '12px'
    },
    yearBar: {
        width: '82px !important',
    },
    pagination: {
        float: 'right',
        marginTop: '10px'
    },
  }))

const getPageCount = (totalMovies) => {
    return Math.ceil(totalMovies / 10)
}

function MovieSearch({searchData, fetchMovies}) {
    const classes = useStyles()
    const [page, setPage] = useState(1);
    const [year, setYear] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        fetchMovies(page, title || 'Batman', year)
    }, [page])

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };


    const searchMovie = () => {
        debugger
        setPage(1);
        fetchMovies(page, title, year)
    }

    return (
        <div className={classes.movieSearchWrapper}>
            <div className={classes.movieSearhBar}>
                <span className={classes.title}>Movies</span>
                <SearchBar placeholder="Batman" onChange={handleTitleChange} />
                <SearchBar placeholder="Year" width="82px" className={classes.yearBar} onChange={handleYearChange}/>
                <Button variant="contained" className={classes.searchButton} onClick={searchMovie}>
                    Search 
                </Button>
            </div>
            {searchData && searchData.movies && searchData.movies.map((movie, index) => (
                <MovieItem key={`searched-movie-${index}`} movie={movie} index={index}/>
            ))}
            <Pagination count={getPageCount(searchData.totalMovies)} color="primary" page={page} onChange={handlePageChange}
                        className={classes.pagination}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        searchData: state.searchData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchMovies: (page, title, year) => dispatch(fetchMovies(page,  title, year))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)