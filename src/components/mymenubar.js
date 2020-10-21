import React from 'react';
import {Toolbar, AppBar, IconButton} from '@material-ui/core';
import {Menu as MenuIcon} from '@material-ui/icons';

export default function MyMenuBar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={props.homeClick}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
