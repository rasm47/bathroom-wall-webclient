import React from 'react';
import {Toolbar, AppBar, IconButton, Typography} from '@material-ui/core';
import {Menu as MenuIcon, AccountCircle as AccountCircleIcon} from '@material-ui/icons';

export default function MyMenuBar(props) {
  const showLogin = props.showLogin;
  
  return (
    <div style={{flexGrow: 1}}>
    <AppBar position="fixed">
      <Toolbar >
        <IconButton edge="start" color="inherit" onClick={props.homeClick}>
          <MenuIcon />
        </IconButton>
        <Typography color="inherit" variant="h5" style={{flexGrow: 1}}>Title text</Typography>
        {showLogin && (
          <AccountCircleIcon color="inherit" edge="end"/>
          )}
        <Typography color="inherit" >{showLogin ? "logged in" : "not logged in"}</Typography>
        
      </Toolbar>
      
    </AppBar>
    <Toolbar />
    </div>
  );
}
