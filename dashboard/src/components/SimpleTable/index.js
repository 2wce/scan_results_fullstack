import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useFetchResults } from '../../useFetchResults';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// });

const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const SimpleTable = () => {
  const classes = useStyles();
  const { results } = useFetchResults(undefined, 'GET')

  return (
    <Paper className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Repository Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Timestamp</TableCell>
            <TableCell align="right">Findings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.repositoryName}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.finishedAt}</TableCell>
                <TableCell align="right">{row.findings ? row.findings.length : 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default SimpleTable;