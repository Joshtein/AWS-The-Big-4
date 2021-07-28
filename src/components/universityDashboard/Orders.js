import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, data, count) {
  return { id, date, data, count };
}

const rows = [
  createData(0, '28 July, 2021', 'Searched Count', 100+' times'),
  createData(1, '28 July, 2021', 'Times Recommended', 90+' times'),
  createData(2, '28 July, 2021', 'Wishlisted Count', 70+' times'),
  createData(3, '28 July, 2021', 'Removed Count', 10+' times'),
  createData(4, '27 July, 2021', 'Searched Count', 85+' times'),
  createData(5, '27 July, 2021', 'Times Recommended', 80+' times'),
  createData(6, '27 July, 2021', 'Wishlisted Count', 65+' times'),
  createData(7, '27 July, 2021', 'Removed Count', 8+' times'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Data</TableCell>
            <TableCell align='right'>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.data}</TableCell>
              <TableCell align="right">{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more data
        </Link>
      </div>
    </React.Fragment>
  );
}
