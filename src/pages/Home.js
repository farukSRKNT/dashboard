import { makeStyles } from '@material-ui/core/styles'
import Categories from '../components/Categories/Categories'
import WatchTime from '../components/WatchTime'
import TopMovies from '../components/TopMovies'
import Movies from '../components/Movies'
import Activity from '../components/Activity'

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