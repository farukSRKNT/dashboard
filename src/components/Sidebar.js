import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import { Drawer, Icon } from '@material-ui/core'

import HomeIcon from '../assets/icons/home.svg'
import FeedIcon from '../assets/icons/feed.svg'
import LabelIcon from '../assets/icons/label.svg'
import UserGroupIcon from '../assets/icons/user-group.svg'

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: 'inherit',
    backgroundImage: 'linear-gradient(#4C8DEB, #4C60EB);',
  },
  link: {
    borderRadius: '5px',
    width: '45px',
    height: '45px',
    textDecoration: 'none',
    marginTop: '13px',
    marginRight: '7px',
    marginLeft: '6px',
    // center elements
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeLink: {
    backgroundColor: '#2350BC',
  },
  whiteCircleLink: {
    width: '60px',
    height: '70px',
  },
  whiteCircle: {
    margin: '13px 8px',
    width: '44px',
    height: '44px',
    backgroundColor: 'white',
    borderRadius: '25px',
  },
}))

export default function Sidebar(Props) {
  const classes = useStyles()

  return (
    <Drawer
      style={{ width: '60px' }}
      variant="persistent"
      anchor="left"
      open={true}
      classes={{ paper: classes.drawerPaper }}
    >
      <NavLink to="/" className={classes.whiteCircleLink}>
        <div className={classes.whiteCircle}></div>
      </NavLink>

      <NavLink
        to="/"
        className={classes.link}
        activeClassName={classes.activeLink}
        exact
      >
        <Icon>
          <img src={HomeIcon} height={25} width={25} alt="" />
        </Icon>
      </NavLink>

      <NavLink
        to="/users"
        className={classes.link}
        activeClassName={classes.activeLink}
        exact
      >
        <Icon>
          <img src={UserGroupIcon} height={25} width={25} alt="" />
        </Icon>
      </NavLink>

      <NavLink
        to="/feed"
        className={classes.link}
        activeClassName={classes.activeLink}
        exact
      >
        <Icon>
          <img src={FeedIcon} height={25} width={25} alt="" />
        </Icon>
      </NavLink>

      <NavLink
        to="/price"
        className={classes.link}
        activeClassName={classes.activeLink}
        exact
      >
        <Icon>
          <img src={LabelIcon} height={25} width={25} alt="" />
        </Icon>
      </NavLink>
    </Drawer>
  )
}
