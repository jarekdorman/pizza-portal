  
import React from 'react';
import styles from './Kitchen.module.scss';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';


const demoContent = [
  {id: '1', status: 'done', table: '4', task: 'prawns tagliatelle', amount: '1'},
  {id: '2', status: 'preparing', table: '2', task: 'zio stefano\'s breakfast', amount: '2'},
  {id: '3', status: 'done', table: '3', task: 'nonno alberto\'s salad', amount: '1'},
  {id: '4', status: 'preparing', table: '5', task: 'nonna alba\'s pizza', amount: '1'},
  {id: '5', status: 'ordered', table: '1', task: 'pizza salami bacon', amount: '2'},
  {id: '6', status: 'ordered', table: '6', task: 'nonna alba\'s pizza', amount: '2'},
];

const renderActions = (status) => {
  switch (status) {
    case 'done':
      return (
        <Button>Done</Button>
      );
    case 'preparing':
      return (
        <Button>Preparing</Button>
      );
    case 'ordered':
      return (
        <Button>Ordered</Button>
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead className={styles.head}>
          <TableCell>Order ID</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Table NR</TableCell>
          <TableCell>Task</TableCell>
          <TableCell>Amount</TableCell>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                {row.task}
              </TableCell>
              <TableCell>
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;