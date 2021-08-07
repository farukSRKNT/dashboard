import { makeStyles } from "@material-ui/core"
import SimpleBarChart from "./SimpleBarChart"

const useStyles = makeStyles(theme => ({
    watchTimeWrapper: {
        height: '351px',
        width: '540px',
    },
    watchTimeHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default function WatchTime() {
    const classes = useStyles()

    return (
        <div className={classes.watchTimeWrapper}>
            <div className={classes.watchTimeHeader}>
                <div>Watch Time</div>
                <div>Last 6 Months</div>
            </div>
            <SimpleBarChart/>
        </div>
    )
}