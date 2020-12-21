import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomeScreen from './components/homescreen';
import Textbox from './components/textbox';
import Room from './components/room';
import MyMenuBar from './components/mymenubar';

// dummy for testing
function Login(props) {
  return (
    <Container><p> login </p></Container>
  );
}

// dummy for testing
function Root(props) {
  return (
    <Container>
      <ul >
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
        <Link to="/secret">secret</Link>
        </li>
      </ul>
      
    </Container>
  );
}

// dummy for testing
function Register(props) {
  return (
    <Container><p> register </p></Container>
  );
}

// dummy for testing
function Secret(props) {
  return (
    <Container><p> secret </p></Container>
  );
}

class App extends React.Component {
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
      <Router>
        <Container component="main" maxWidth="md">
          <MyMenuBar 
            homeClick={ () => {this.setState({renderRoomSelection: !this.state.renderRoomSelection})}}
          />
          <HomeScreen
            close={ () => this.setState({renderRoomSelection: false})}
            render={this.state.renderRoomSelection}
          />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/" component={Root} />
            <Route path="/register" component={Register} />
            <Route path="/secret" component={Secret} />
          </Switch>
        </Container>
      </Router>
    );
  }
  
}


export default App;
