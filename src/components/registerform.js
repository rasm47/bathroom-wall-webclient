import React, { useState } from 'react';
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import { Create as CreateIcon } from '@material-ui/icons';
import Alert from '@material-ui/lab/Alert';

import Auth from '../services/authservice';

function FeedbackSnackbar(props) {
  return (
    <Snackbar
      open={props.snackOpen}
      onClose={props.snackClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={props.snackClose}
        severity={props.snackSeverity}
        variant="filled"
      >
        {props.snackText}
      </Alert>
    </Snackbar>
  );
}

export default function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [snackState, setSnackState] = useState("none");

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackState("none");
  };

  const handleRegisterButtonPress = event => {
      event.preventDefault();
      
      const obj = {
        username: username,
        password: password1,
        email: email,
      };

      if (password1 === password2) {
        Auth.register(obj.username)
        .then(() => setSnackState("success"))
        .catch(e => {
          setSnackState("usernametaken");
        });
      }
    };

  return (
    <form>
      <FeedbackSnackbar 
        snackOpen={snackState === "success"}
        snackClose={handleSnackbarClose}
        snackSeverity="success"
        snackText="account created, please login"
      />
      <FeedbackSnackbar 
        snackOpen={snackState === "usernametaken"}
        snackClose={handleSnackbarClose}
        snackSeverity="error"
        snackText="username taken"
      />

      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
      >

        <Grid item>
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            value={username}
            autoFocus
            required
            onChange={e => setUsername(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            name="password1"
            label="Password"
            variant="outlined"
            type="password"
            value={password1}
            required
            onChange={e => setPassword1(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            name="password2"
            label="Confirm password"
            variant="outlined"
            type="password"
            value={password2}
            error={passwordMatchError}
            helperText={passwordMatchError ? "Passwords don't match" : ""}
            required
            onChange={e => {
              setPassword2(e.target.value);
            }}
            onFocus={e => {
              setPasswordMatchError(false);
            }}
            onBlur={e => {
              setPasswordMatchError(password1 !== password2);
            }}
          />
        </Grid>

        <Grid item>
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            endIcon={<CreateIcon />}
            onClick={handleRegisterButtonPress}
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}