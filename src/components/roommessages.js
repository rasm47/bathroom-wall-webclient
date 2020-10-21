import React from 'react';
import { Container, List } from '@material-ui/core';
import ScrollableFeed from 'react-scrollable-feed';

export default function RoomMessages(props) {
    return (
      <Container style={{ maxHeight: "150px" }}>
        <ScrollableFeed style={{ width: "100%", maxWidth: "100%" }}>
          <List >
            {props.messages.map(
              (str, index) => <li style={{ maxWidth: "100%", wordWrap: "break-word" }} key={index}>{str}</li>
            )}
          </List>
        </ScrollableFeed>
      </Container>
    );
  }
  