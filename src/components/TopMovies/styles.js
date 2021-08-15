import { makeStyles } from '@material-ui/core'

export default makeStyles(() => ({
  moviesWrapper: {
    width: 'calc(100% - 46px)',
    padding: '30px 23px',
  },
  title: {
    fontSize: '20px',
    marginBottom: '2px',
  },
  movie: {
    display: 'flex',
    fontSize: '15px',
    alignItems: 'center',
    marginTop: '18px',
    '&:last-child $movieInfoWrapper': {
      borderBottom: 'none',
    },
  },
  movieInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: '1',
    marginRight: '23px',
    marginLeft: '18px',
    height: '35px',
    borderBottom: '1px solid #DDE9FB',
  },
  movieName: {
    color: '#4C8DEB',
  },
  scoreWrapper: {
    display: 'flex',
  },
  score: {
    marginLeft: '4px',
  },
}))
