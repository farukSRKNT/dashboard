import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Categories from '../components/Categories/Categories'
import WatchTime from '../components/WatchTime/WatchTime'
import TopMovies from '../components/TopMovies/TopMovies'
import Movies from '../components/MovieSearch/MovieSearch'
import Activity from '../components/Activity/Activity'

const useStyles = makeStyles(() => ({
  row: {
    display: 'flex',
  },
  title: {
    fontSize: '28px',
    color: '#405169',
    fontWeight: '600',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.title}>Dashboard</div>
      <Grid container item xs={12}>
        <Grid xs={12} sm={6} md={9} item container>
          <Grid item xs={12} md={5}>
            <Categories />
          </Grid>
          <Grid item xs={12} md={7}>
            <WatchTime />
          </Grid>
          <Grid item xs={12} md={5}>
            <TopMovies />
          </Grid>
          <Grid item xs={12} md={7}>
            <Movies />
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={6} md={3}>
          <Activity />
        </Grid>
      </Grid>
    </>
  )
}
