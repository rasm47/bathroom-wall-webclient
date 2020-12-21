import React from 'react';
import { Container } from '@material-ui/core';
import Room from './room';

export default class Textbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        roomTitle: "roomtitle",
        roomMessages: ["Inital message for quick UI testing 1", "Inital message for quick UI testing 2"],
        renderRoomSelection: false,
      };
    }
  
    render() {
      return (
        <Container maxWidth="md">
          <Room 
            messages={this.state.roomMessages}
            roomTitle={this.state.roomTitle}
            newMessage={ m => {
              const arr = this.state.roomMessages.slice();
              arr.push(m);
              this.setState({roomMessages: arr});
            }}
          />
        </Container>
      );
    }
    
  }