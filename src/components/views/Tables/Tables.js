import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const demoContent = {
  date: '2020-05-17T12:00',
};

const schedul = [
  {time: '12:00', table1: 'reservation', id1: 'r1', table2: '', id2: '', table3: '', id3: '', table4: 'event', id4: 'e1', table5: '', id5: '', table6: '', id6: ''},
  {time: '12:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '13:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '13:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: 'event', id5: 'e3', table6: '', id6: ''},
  {time: '14:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '14:30', table1: 'event', id1: 'e2', table2: '', id2: '', table3: 'reservation', id3: 'r2', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '15:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '15:30', table1: '', id1: '', table2: 'event', id2: 'e4', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '16:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: 'reservation', id5: 'r5', table6: 'reservation', id6: 'r6'},
  {time: '16:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '17:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '17:30', table1: '', id1: '', table2: 'reservation', id2: 'r7', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '18:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '18:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: 'reservation', id5: 'r8', table6: '', id6: ''},
  {time: '19:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: 'reservation', id6: 'r9'},
  {time: '19:30', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: '', id5: '', table6: '', id6: ''},
  {time: '20:00', table1: '', id1: '', table2: '', id2: '', table3: '', id3: '', table4: '', id4: '', table5: 'event', id5: 'e5', table6: '', id6: ''},
  {time: '20:30', table1: 'reservation', id1: 'r10', table2: '', id2: '', table3: '', id3: '', table4: 'reservation', id4: 'r11', table5: '', id5: '', table6: '', id6: ''},
];

const renderActions = (table, id) => {
  switch (table) {
    case 'reservation':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/'+ id}>Reservation</Button>
      );
    case 'event':
      return (
        <Button component ={Link} to={process.env.PUBLIC_URL +'/tables/events/'+ id}>Event</Button>
      );
    default:
      return null;
  }
};


const Tables = () => {
  return (
    <div className={styles.component}>
      <form className={styles.select} noValidate>
        <TextField
          id="datetime-local"
          label="Reservation date"
          type="datetime-local"
          value={demoContent.date}
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button className={styles.button} component ={Link} to={process.env.PUBLIC_URL +'/tables/booking/new'}>New Reservation</Button>
        <Button className={styles.button} component ={Link} to={process.env.PUBLIC_URL +'/tables/events/new'}>New Event</Button>
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedul.map(row => (
            <TableRow key={row.time}>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.table1, row.id1)}
              </TableCell>
              <TableCell>
                {renderActions(row.table2, row.id2)}
              </TableCell>
              <TableCell>
                {renderActions(row.table3, row.id3)}
              </TableCell>
              <TableCell>
                {renderActions(row.table4, row.id4)}
              </TableCell>
              <TableCell>
                {renderActions(row.table5, row.id5)}
              </TableCell>
              <TableCell>
                {renderActions(row.table6, row.id6)}
              </TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </div>
  );
};

export default Tables;