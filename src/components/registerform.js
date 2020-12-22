import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import {Create as CreateIcon} from '@material-ui/icons';

export default function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      
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
            variant="outlined"
            value={username}
            placeholder="username"
            autoFocus
            required
            onChange={e => setUsername(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            name="password1"
            variant="outlined"
            value={password1}
            placeholder="password"
            required
            onChange={e => setPassword1(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            name="password2"
            variant="outlined"
            value={password2}
            placeholder="retype password"
            required
            onChange={e => setPassword2(e.target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            name="email"
            variant="outlined"
            value={email}
            placeholder="email address"
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            endIcon={<CreateIcon />}
            onClick={event => {
              event.preventDefault();
              const obj = {
                username: username,
                password: password1,
                email: email,
              };
              if (password1 === password2) {
                props.onRegisterClick(obj);
              } else {
                // TODO
              }
            }}
          >
            REGISTER
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}