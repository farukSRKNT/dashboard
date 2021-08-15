import React from 'react'
import { makeStyles, alpha } from '@material-ui/core'
import { InputBase } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  search: (props) => ({
    border: '1px solid #A0BCE4',
    position: 'relative',
    height: '30px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: props.marginRight || theme.spacing(2),
    marginLeft: 0,
    // width: '82px',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }),
  searchIcon: {
    padding: '0 10px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#A0BCE4',
  },
  inputRoot: (props) => ({
    color: 'inherit',
    width: props.width || '100%',
  }),
  inputInput: {
    color: '#A0BCE4',
    fontSize: '14px',
    padding: '8px 6px 6px 0',
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: (props) => ({
      width: props.width || '20ch',
    }),
  },
}))

export default function SearchBar(props) {
  const classes = useStyles(props)

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={props.placeholder || 'Search'}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={props.onChange}
      />
    </div>
  )
}
