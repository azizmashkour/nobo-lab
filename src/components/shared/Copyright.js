import React from 'react';
import { environment as env } from '../../environments/env.dev';
import Typography from '@material-ui/core/Typography';
import { navigation } from '../../constants/configs';
import Link from '@material-ui/core/Link';
const Copyright =()=> {
  const currentDate = new Date().getFullYear();

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to={navigation.home}>
        { env.APP_NAME }
      </Link>{' '}
      {currentDate}
      {'.'}
    </Typography>
  );
}

export default Copyright;
