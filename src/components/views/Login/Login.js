import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const Login = () => {
  return (
    <div className={styles.component}>
      <TextField className={styles.input} id="standard-basic" label="Login" variant="outlined"/>
      <TextField
        className={styles.input}
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      <Button className={styles.button} variant="contained" color="primary">
          Sing in
      </Button>
    </div>
  );
};

export default Login;
