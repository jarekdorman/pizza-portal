import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Waiter.module.scss';

const Waiter = () => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <ul>
        <li>
          <Link to={process.env.PUBLIC_URL + '/waiter/order/new'}>New order</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/waiter/order/:id'}>Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Waiter;