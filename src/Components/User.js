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
export default class User extends Component {
  render() {
    const user = this.props.user;
    console.log(user);
    return (
      <React.Fragment>
        <Box
          pad="small"
          border
          direction="column"
          fill="horizontal"
          basis="xxsmall"
          justify="center"
        >
          {user.name.first} {user.name.last} <br />
        </Box>
      </React.Fragment>
    );
  }
}
