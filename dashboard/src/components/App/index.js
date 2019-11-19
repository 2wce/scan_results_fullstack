import { green } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import { Link } from 'react-router-dom';
import theme from '../../theme';
import { Nav, SimpleTable } from '../index';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Container component="main" maxWidth="md">
          <Nav/>
          <SimpleTable />
          <Link to="/results/new" >
            <Fab aria-label="Add" className={classes.fab} color="primary">
                  {<AddIcon />}
              </Fab>
          </Link>


      </Container>
    </ThemeProvider>
  );
}