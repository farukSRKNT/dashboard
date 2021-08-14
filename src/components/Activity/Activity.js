import React from "react"
import ActivityItem from "./ActivityItem"
import { makeStyles } from "@material-ui/core"

const data = [
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '1',
        content: 'Invoice #0075 of amount $2000 has been emailed to email@address.com'
    },
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '2',
        content: 'Invoice #0072 of amount $1300 has been paid and added to your account.'
    },
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '3',
        content: 'Invoice #0076 of amount $1300 has been generated and is ready to be sent.'
    },
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '1',
        content: 'Invoice #0075 of amount $2000 has been emailed to email@address.com'
    },
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '2',
        content: 'Invoice #0072 of amount $1300 has been paid and added to your account.'
    },
    {
        time: '11.03AM',
        date: '11-02-2028',
        activityType: '3',
        content: 'Invoice #0076 of amount $1300 has been generated and is ready to be sent.'
    },
]

const useStyles = makeStyles((theme) => ({
    activityWrapper: {
        width: '25.5%'
    },
    activityListTitle: {
        fontSize: '20px',
        marginBottom: '20px'
    },
    activityList: {
        padding: '29px 17px 17px'
    }
}))

export default function Activity(Props) {
    const classes = useStyles()

    return (
        <div className={classes.activityWrapper}>
            <div className={classes.activityListTitle} >Activty</div>
            <div className={classes.activityList}>
                {data.map((activity, index) => (
                    <ActivityItem key={`activity-${index}`} activity={activity}/>
                ))}
            </div>
        </div>
    )
}