import React from 'react';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import useStyles from './useStyles';

export default function FormPropsTextFields() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField required id="filled-required" variant="filled" />
    </form>
  );
}
