import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomeScreen from './components/homescreen';
import Textbox from './components/textbox';
import Room from './components/room';
import RegisterForm from './components/registerform';
import MyMenuBar from './components/mymenubar';
import Auth from './services/authservice';
import DataService from './services/dataservice';

// dummy for testing
function Login(props) {
  return (
    <Container>
      <p> login </p>
      <button onClick={() => {
        Auth.login("alice").then(_ => alert(JSON.stringify(Auth.getUser())));
      }}>Click here to login as "alice"</button>
    </Container>
  );
}

// dummy for testing
function Logout(props) {
  return (
    <Container>
      <p> logout </p>
      <button onClick={() => {
        Auth.logout();
        alert("logged out");
      }}>Click here to logout</button>
    </Container>
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
        <Link to="/logout">logout</Link>
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
    <Container>
      <h2> register page </h2>
      <button onClick={() => {
        Auth.register("alice");
      }}>Click here to register as "alice"</button>
      <RegisterForm onRegisterClick={obj => {
        alert(JSON.stringify(obj));
      }} />
    </Container>
  );
}

// dummy for testing
function Secret(props) {
  return (
    <Container>
      <p>secret</p>
      <button onClick={() => {
        DataService.getSecret().then(r => alert(JSON.stringify(r.data))).catch(e => alert(JSON.stringify(e.message)));
      }}>alert to test secret</button>
    </Container>
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
            <Route path="/logout" component={Logout} />
          </Switch>
        </Container>
      </Router>
    );
  }
  
}


export default App;
