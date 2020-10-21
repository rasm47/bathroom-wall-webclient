import React from 'react';
import { Container } from '@material-ui/core';

import './App.css';

import HomeScreen from './components/homescreen';
import Room from './components/room';
import MyMenuBar from './components/mymenubar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [{title: "room 1 title"}, {title: "room 2 title"}],
      roomTitle: "",
      roomMessages: ["Inital message for quick UI testing 1", "Inital message for quick UI testing 2"],
      renderRoomSelection: false,
    };
  }

  render() {
    
    return (
      <Container component="main" maxWidth="md">
        <MyMenuBar 
          homeClick={ () => {this.setState({renderRoomSelection: !this.state.renderRoomSelection})}}
        />
        <HomeScreen
          rooms={this.state.rooms}
          close={ () => this.setState({renderRoomSelection: false})}
          render={this.state.renderRoomSelection}
        />
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


export default App;
