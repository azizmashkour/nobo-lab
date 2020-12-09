import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { APP_NAME } from '../../constants/commons';

const Copyright =()=> {
  const currentDate = new Date().getFullYear();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        { APP_NAME }
        </Link>{' '}
      {currentDate}
      {'.'}
    </Typography>
  );
}

export default Copyright;
