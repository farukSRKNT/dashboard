import { makeStyles } from '@material-ui/core/styles'
import Categories from '../components/Categories/Categories'
import WatchTime from '../components/WatchTime/WatchTime'
import TopMovies from '../components/TopMovies/TopMovies'
import Movies from '../components/MovieSearch/MovieSearch'
import Activity from '../components/Activity/Activity'

const useStyles = makeStyles((theme) => ({
    row: {
        display: 'flex'
    }
  }))


export default function Home(Props) {
  const classes = useStyles();

    return (
        <>
            <h1>Dashboard</h1>
            <div className={classes.row}>
                <div style={{display: 'block'}}>
                    <div className={classes.row}>
                    <Categories />
                    <WatchTime />
                    </div>
                    <div className={classes.row}>
                    <TopMovies />
                    <Movies />
                    </div>
                </div>
                <Activity />
            </div>
        </>
    )
}