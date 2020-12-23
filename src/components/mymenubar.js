import React from 'react';
import {Toolbar, AppBar, IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';

export default function MyMenuBar(props) {
  return (
    <React.Fragment>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={props.homeClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      
    </AppBar>
    <Toolbar />
    </React.Fragment>
  );
}
