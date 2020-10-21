import React from 'react';
import { Container, List, TextField } from '@material-ui/core';
import ScrollableFeed from 'react-scrollable-feed';

export default function Room(props) {
  return (
    <Container style={{ maxHeight: "333px" }}>
      <MessageList messages={props.messages} />
      <MessageWriter sendMessage={props.newMessage} />
    </Container>
  );
}

function MessageList(props) {
  return (
    <ScrollableFeed >
      <List >
        {props.messages.map(
          (str, index) =>
            <li
              style={{ maxWidth: "100%", wordWrap: "break-word" }}
              key={index}
            >
              {str}
            </li>
        )}
      </List>
    </ScrollableFeed>
  );
}

class MessageWriter extends React.Component {
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
