import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Badge } from '@material-ui/core'
import SearchBar from './SearchBar'
import NotificationsIcon from '../assets/icons/notifications.svg'
import ProfilePic from '../assets/images/profile-pic.png'

const useStyles = makeStyles((theme) => ({
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    height: '40px',
    padding: '15px 17px',
  },
  userInfoWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  userMovieInfoWrapper: {
    color: '#D8D8D8',
    width: '250px',
    marginRight: '2px',
  },
  notifications: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadge: {
    marginRight: '32px',
  },
  customBadge: {
    backgroundColor: '#36D09E',
    color: 'white',
  },
  profilePicWrapper: {
    border: '4px solid #E8EBF8',
    borderRadius: '25px',
    width: '40px',
    minHeight: '40px',
  },
}))

function Header({ movieHistoryData }) {
  const classes = useStyles()
  console.log(movieHistoryData)

  return (
    <div className={classes.header}>
      <SearchBar />
      <div className={classes.userInfoWrapper}>
        <div className={classes.userMovieInfoWrapper}>
          <Typography size="xl" weight="medium">
            Reviewed Movies Count:{' '}
            {movieHistoryData ? movieHistoryData.reviewedMovieCount : 0}
          </Typography>
          {movieHistoryData && movieHistoryData.lastReviewedMovie && (
            <Typography size="xl" weight="medium">
              Last Reviewed Movie:{' '}
              {movieHistoryData ? movieHistoryData.lastReviewedMovie : ''}
            </Typography>
          )}
        </div>

        <div className={classes.notifications}>
          <Badge
            badgeContent={12}
            className={classes.notificationBadge}
            classes={{ badge: classes.customBadge }}
          >
            <img src={NotificationsIcon} height={20} width={16} alt="" />
          </Badge>

          <div className={classes.profilePicWrapper}>
            <img src={ProfilePic} height={40} width={40} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movieHistoryData: {
      reviewedMovieCount: state.reviewedMovieCount,
      lastReviewedMovie: state.lastReviewedMovie,
    },
  }
}

export default connect(mapStateToProps)(Header)
