import React from 'react';
import {Container} from '@material-ui/core';

import RoomTitle from './roomtitle';
import RoomMessages from './roommessages';
import RoomWriter from './roomwriter';

export default function Room(props) {
  return (
    <Container >
      <RoomTitle text={props.roomTitle} />
      <RoomMessages
        messages={props.messages}
      />
      <RoomWriter sendMessage={props.newMessage} />
    </Container>
  );
}

