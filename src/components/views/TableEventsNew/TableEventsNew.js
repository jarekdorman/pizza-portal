import React from 'react';
import styles from './TableEventsNew.module.scss';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';


const TableEventsNew = () => {
  return (
    <div className={styles.component}>
      <h2>New Event</h2>
      <List>
        <ListItem>
          <ListItemText>
            <TextField
              id="datetime-local"
              label="Reservation date"
              type="datetime-local"
              className={styles.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField className={styles.item} id="standard-basic" label='table' variant="filled" />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField className={styles.item} id="standard-basic" label='people' variant="filled" />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField className={styles.item} id="standard-basic" label='name' variant="filled" />
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <TextField className={styles.item} id="standard-basic" label='telephone' variant="filled" />
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default TableEventsNew;