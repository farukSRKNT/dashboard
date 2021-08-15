import React from 'react'
import { makeStyles } from '@material-ui/core'
import SentIcon from '../../assets/icons/sent.svg'
import ReceivedIcon from '../../assets/icons/received.svg'
import GeneratedIcon from '../../assets/icons/generated.svg'

const icons = {
  1: SentIcon,
  2: ReceivedIcon,
  3: GeneratedIcon,
}

const useStyles = makeStyles((theme) => ({
  activityItem: {
    display: 'flex',
    height: 'fit-content',
  },
  dateTime: {},
  time: {
    fontSize: '8px',
  },
  date: {
    fontSize: '10px',
  },
  iconLine: {
    position: 'relative',
    margin: '0 7px',
  },
  iconWrapper: {
    position: 'relative',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '24px',
    height: '24px',
    borderRadius: '25px',
    boxShadow: '0px 2px 4px rgba(76, 141, 235, 0.256992)',
    zIndex: '1',
  },
  line: {
    position: 'absolute',
    width: '12px',
    height: '100%',
    top: 0,
    right: 0,
    borderLeft: '1px solid rgba(76, 141, 235, 0.186481)',
  },
  messageBox: {
    border: '1px solid #DDE9FB',
    borderRadius: '5px',
    width: '183px',
    height: 'fit-content',
    padding: '10px 10px 12px',
  },
  sendMoneyLink: {
    display: 'block',
    color: '#4C8DEB',
  },
}))

const highlightText = (text) => {
  // change color of transactionId
  let result = text.replace(/#\d+/, '<span style="color: #4C8DEB">$&</span>')
  // make money anount bolder
  result = result.replace(
    /\$\d+/,
    '<span style="color: #405169; font-weight: bold">$&</span>'
  )

  return result
}

export default function Activity(props) {
  const classes = useStyles()
  const { activity } = props

  return (
    <div className={classes.activityItem}>
      <div className={classes.dateTime}>
        <div className={classes.time}>{activity.time}</div>
        <div className={classes.date}>{activity.date}</div>
      </div>
      <div className={classes.iconLine}>
        <div className={classes.iconWrapper}>
          <img
            src={icons[activity.activityType]}
            width={13}
            height={12}
            alt="activity type"
          />
        </div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.messageBox}>
        <div className={classes.title}>{activity.title}</div>
        <div className={classes.content}>
          <span
            dangerouslySetInnerHTML={{
              __html: highlightText(activity.content),
            }}
          />
          {activity.activityType === '3' && (
            <a
              href="http://www.sendmoney.com"
              rel="noreferrer"
              target="_blank"
              className={classes.sendMoneyLink}
            >
              Send now
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
