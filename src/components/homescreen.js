import React from 'react';
import {Paper, Typography, Container} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons';

export default function HomeScreen(props) {
    if (!props.render) {
      return null;
    }
    return (
      <Paper elevation={3}>
        <CloseIcon
          style={ {float: "right"} }
          onClick={props.close}
        />
        <Container>
          <Typography>
            This menu is unfinsihed.
          </Typography>
        </Container>
      </Paper>
    );
  }