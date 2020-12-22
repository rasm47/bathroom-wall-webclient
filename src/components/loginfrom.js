import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import {ArrowRight as ArrowRightIcon} from '@material-ui/icons';

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            endIcon={<ArrowRightIcon />}
            onClick={event => {
              event.preventDefault();
              const obj = {
                username: username,
                password: "TODO",
              };
              alert(JSON.stringify(obj));
            }}
          >
            LOGIN
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}