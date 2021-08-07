import { makeStyles, alpha } from '@material-ui/core/styles'
import { InputBase, Typography, Badge } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
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
      search: {
        border: '1px solid #A0BCE4',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#A0BCE4'
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        color: '#A0BCE4',
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
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
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                placeholder="Search"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
          </div>
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