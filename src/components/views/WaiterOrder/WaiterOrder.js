import React from 'react';
import styles from './WaiterOrder.module.scss';
import { useParams } from 'react-router-dom';



const WaiterOrder = () => {
  const {id} = useParams();
  return (
    <div className={styles.component}>
      <h2>Waiter Order view</h2>
      <h3>Nr: {id}</h3>
    </div>
  );
};

export default WaiterOrder;