import React, { Component } from "react";
import User from "./User";
import {
  Box,
} from "grommet";
export default class Users extends Component {
  render() {
    const users = this.props.users;
    return (
      <Box
        flex
        justify="start"
        direction="column"
        border={{ color: "brand", size: "large" }}
      >
        {users.length > 0 &&
          users.map(item => <User user={item} key={item.id.value} />)}
      </Box>
    );
  }
}
