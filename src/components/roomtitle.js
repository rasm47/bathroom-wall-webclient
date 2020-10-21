import React from 'react';
import {Typography} from '@material-ui/core';

export default function RoomTitle(props) {
  return (
    <Typography variant="h4">
      {props.text}
    </Typography>
  );
}