import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { navigation } from '../../constants/configs';
import { Link } from "react-router-dom";
import AppLogo from './NoboLogo.png';
const Header =()=> {

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="md" component="header">
        <Toolbar>
          <Typography color="inherit" noWrap>
            <Link to={navigation.home}><img src={AppLogo} /></Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
