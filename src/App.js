import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomeScreen from './components/homescreen';
//import Textbox from './components/textbox';
//import Room from './components/room';
import RegisterForm from './components/registerform';
import LoginForm from './components/loginfrom';
import MyMenuBar from './components/mymenubar';
import Auth from './services/authservice';
import DataService from './services/dataservice';

// dummy for testing
function Login(props) {
  return (
    <Container>
      <h3> login form </h3>
      <LoginForm onLogin={obj => {
        const username = obj.username;
        Auth.login(username, () => props.setShowLogin(true));
      }} />
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
        props.setShowLogin(false);
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
    <Container >
      <RegisterForm />
    </Container>
  );
}

// dummy for testing
function Secret(props) {
  return (
    <Container>
      <p>secret</p>
      <button onClick={async () => {
        const secret =  await DataService.getSecret();
        alert(secret);
      }}>alert to test secret</button>
    </Container>
  );
}

function App() {
  const [renderRoomSelection, setRenderRoomSelection] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Container component="main" >

      <MyMenuBar
        homeClick={() => setRenderRoomSelection(!renderRoomSelection)}
        showLogin={showLogin}
      />

      <HomeScreen
        close={() => setRenderRoomSelection(false)}
        render={renderRoomSelection}
      />

      <Container style={{ paddingTop: "32px" }}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login setShowLogin={setShowLogin}/>
            </Route>
            <Route exact path="/">
              <Root />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/secret">
              <Secret />
            </Route>
            <Route path="/logout">
              <Logout setShowLogin={setShowLogin}/>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Container>
  );
}

export default App;
