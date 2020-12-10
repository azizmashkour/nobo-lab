import React from "react";
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../shared/styles';

const NoResult =(props)=> {
  const classes = useStyles();
  const { message } = props;

  return (
    <Typography
      gutterBottom
      variant="h5"
      component="h2"
      className={classes.cardContentCenter}
    >
      {message}
    </Typography>
  );
}

export default NoResult;
