import React from 'react';
import styles from './TablesBooking.module.scss';
import { useParams } from 'react-router-dom';


const TablesBooking = () => {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Tables Booking view</h2>
      <h3>Nr: {id}</h3>
    </div>
  );
};

export default TablesBooking;