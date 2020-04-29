import React from 'react';
import { IconButton } from '@material-ui/core';
import { List } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Menu as MenuIcon, Close as CloseIcon } from '@material-ui/icons';
import ScrollableFeed from 'react-scrollable-feed';
import './App.css';

async function getData() {
  const response = await fetch('http://localhost:3002/data', {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache'
  });
  
  return response.json();
}

async function postData(strToAdd) {
  if (!strToAdd || strToAdd.length === 0) {
    return;
  }
  const response = await fetch('http://localhost:3002/data', {
    method: 'POST',
    mode: 'cors', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: strToAdd})
  });
  return response.json();
}

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

  componentDidMount() {
    getData()
      .then( (data) => {
        this.setState({roomMessages: data});
      })
      .catch( (error) => {console.error(error);} )
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

function MyMenuBar(props) {
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

function Room(props) {
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

class RoomWriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <div>
        <form 
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            this.props.sendMessage(this.state.text);
            this.setState({text: ""});
            postData(this.state.text)
              .catch( (error) => {console.error(error);} );
          }}
        >
          <TextField 
            name="message"
            variant="filled"
            value={this.state.text}
            placeholder="Type here and press enter to write a message."
            autoFocus
            required
            fullWidth
            onChange={(e) => {
              const userInput = e.target.value || ""; 
              this.setState({text: userInput})
            }}
          />
        </form>
      </div>
    );
  }
  
}

function HomeScreen(props) {
  if (!props.render) {
    return null;
  }
  return (
    <Paper elevation={3}>
      <CloseIcon 
        style={{float: "right", marginTop: "10px", marginRight: "8px"}}
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
          {props.rooms.map( (room, index) => <li key={index}>{room.title}</li> )}
        </List>
        
        </Container>
    </Paper>
  );
}

function RoomMessages(props) {
  return (
    <Container style={{maxHeight:"150px"}}>
      <ScrollableFeed style={{width:"100%", maxWidth:"100%"}}>
        <List >
          {props.messages.map(
            (str, index) => <li style={{maxWidth:"100%", wordWrap:"break-word"}} key={index}>{str}</li>
          )}
        </List>
      </ScrollableFeed>
    </Container>
  );
}

function RoomTitle(props) {
  return (
    <Typography variant="h4">
      {props.text}
    </Typography>
  );
}

export default App;
