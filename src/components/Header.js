import { makeStyles } from '@material-ui/core/styles'
import { Typography, Badge } from '@material-ui/core'

import SearchBar from './SearchBar';
import NotificationsIcon from "../assets/icons/notifications.svg";
import ProfilePic from '../assets/images/profile-pic.png'

const useStyles = makeStyles((theme) => ({
    header: {
       alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      width: 'calc(100% - 34px)',
      height: '40px',
      padding: '15px 17px'
    },
    userInfoWrapper: {
        display: 'flex',
    },
    userMovieInfoWrapper: {
    color: '#D8D8D8',
    width: '250px',
    marginRight: '2px'
    },
    notifications: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationBadge: {
        marginRight: '32px'
    },
    customBadge: {
    backgroundColor: "#36D09E",
    color: "white"
    },
    profilePicWrapper: {
    border: '4px solid #E8EBF8',
    borderRadius: '25px', 
    width: '40px', 
    height: '40px',
    backgroundColor: 'black'
    }
  }))

export default function Header(props) {
    const classes = useStyles();

    return(
        <div className={classes.header}>
          <SearchBar/>
          <div className={classes.userInfoWrapper}>
              <div className={classes.userMovieInfoWrapper}>
                <Typography size="xl" weight="medium">
                    Reviewed Movies Count:
                </Typography>
                <Typography size="xl" weight="medium">
                    Last Reviewed Movie:
                </Typography>
              </div>

                <div className={classes.notifications}>
                    <Badge badgeContent={12} className={classes.notificationBadge} classes={{ badge: classes.customBadge }}>
                        <img src={NotificationsIcon} height={20} width={16} alt=""/>
                    </Badge>

                    <div className={classes.profilePicWrapper}>
                        <img src={ProfilePic} height={40} width={40} alt=""/>
                    </div>
                </div>
          </div>
        </div>
    )
}