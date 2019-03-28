import React, { Component } from "react";
import User from "./User";
export default class Users extends Component {
  render() {
    const users = this.props.users;
    return (
      <React.Fragment>
        {users.length > 0 &&
          users.map(item => <User user={item} key={item.id.value} />)}
      </React.Fragment>
    );
  }
}
