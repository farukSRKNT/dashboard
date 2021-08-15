import { makeStyles } from "@material-ui/core"
import SimpleBarChart from "./SimpleBarChart"
import {useSelector, useDispatch} from 'react-redux'
import {changeWatchTimeInterval} from '../../actions'

import SimpleSelect from '../SimpleSelect'
import { useEffect } from "react"

const useStyles = makeStyles(theme => ({
    watchTimeWrapper: {
        height: '351px',
        width: '100%',
    },
    watchTimeHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))

const SELECT_OPTIONS = [
    {value: 'SIX_MONTHS', name: 'Last Six Months'},
    {value: 'WEEK', name: 'Last Week'},
  ]

export default function WatchTime() {
    const classes = useStyles()
    const watchTimes = useSelector(state => state.watchTimes)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeWatchTimeInterval(SELECT_OPTIONS[0].value))
    }, [])
    
    const handleChange = (value) => {
        dispatch(changeWatchTimeInterval(value))
    };

    return (
        <div className={classes.watchTimeWrapper}>
            <div className={classes.watchTimeHeader}>
                <div>Watch Time</div>
                <SimpleSelect options={SELECT_OPTIONS} handleChange={handleChange}/>
            </div>
            <SimpleBarChart data={watchTimes}/>
        </div>
    )
}