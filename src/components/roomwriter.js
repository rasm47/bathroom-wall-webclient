import React from 'react';
import { TextField } from '@material-ui/core';

export default class RoomWriter extends React.Component {
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
              this.setState({ text: "" });
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
                this.setState({ text: userInput })
              }}
            />
          </form>
        </div>
      );
    }
  
  }
  