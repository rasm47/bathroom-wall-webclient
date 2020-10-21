import React from 'react';
import {Paper, Typography, Container, List} from '@material-ui/core';
import {Close as CloseIcon} from '@material-ui/icons';

export default function HomeScreen(props) {
    if (!props.render) {
      return null;
    }
    return (
      <Paper elevation={3}>
        <CloseIcon
          style={{ float: "right", marginTop: "10px", marginRight: "8px" }}
          onClick={props.close}
        />
        <Container>
          <Typography>
            This menu is unfinsihed.
            </Typography>
          <Typography>
            Below is a list of room titles. Maybe one day they can be clicked.
            </Typography>
          <List>
            {props.rooms.map((room, index) => <li key={index}>{room.title}</li>)}
          </List>
  
        </Container>
      </Paper>
    );
  }