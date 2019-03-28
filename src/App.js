import React, { Component } from "react";
import {
  Box,
  Grommet,
  Grid,
  Button,
  Heading,
  Attraction,
  Text,
  Anchor
} from "grommet";
import { Notification } from "grommet-icons";
import Lyrics from "./Components/Lyrics";
import Users from "./Components/Users";

const theme = {
  global: {
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px"
    }
  }
};

class App extends Component {

  

  state = {
    showSidebar: false,
    lyrics: [
      {
        id: 1,
        media: "https://www.youtube.com/watch?v=cDNDVtoJhik",
        texts: [
          {
            textId: 0,
            startTime: 23.0,
            endTime: 24.0,
            text: "بهت قول میدم"
          },
          {
            textId: 1,
            startTime: 26.0,
            endTime: 30.0,
            text: "سخت نیست لا اقل برای تو"
          }
        ]
      }
    ],
    users: []
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=3").then(res =>
      res.json().then(_users =>{
        console.log(_users["results"]);
        this.setState({
          users: _users["results"]
        });
      }
      )
    );
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet full theme={theme}>
        <Box fill>
          <Box
            as="header"
            direction="row"
            align="center"
            pad={{ vertical: "small", horizontal: "medium" }}
            justify="between"
            background="brand"
            elevation="large"
            style={{ zIndex: "1000" }}
          >
            <Heading level={3} margin="none" color="white">
              <strong>My App</strong>
            </Heading>
            <Button
              onClick={() => this.setState({ showSidebar: !showSidebar })}
              icon={<Notification color="white" />}
            />
          </Box>
          <Box flex direction="row">
            <Box
              flex
              justify="start"
              direction="column"
              border={{ color: "brand", size: "large" }}
            >
              <Users users={this.state.users} />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default App;
