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
  constructor(props) {
    super(props);
    this.state = {
      showLayer: true,
      score:5,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

state = {
  showLayer:false,
}

handleClick() {
  this.setState(state => ({
    score: (state.score-1)
  }));

  if(this.state.score<1){
    this.setState(state => ({
      showLayer: false
    }));
  }
}

  render() {
    const user = this.props.user;
    
    return (
      (this.state.showLayer)&&(
      <Box pad="small" border direction="row" justify="start" onClick={this.handleClick} >
        <Box pad="small" height="xsmall" width="xsmall" background={`url(${user.picture.large})`} round ="full" />
        <Box
          pad="large"
          height="xsmall"
          direction="column"
          justify="center"
          fill="horizontal"
        >
          {user.name.first} {user.name.last} <br />
          {this.state.score}
        </Box>
      </Box>
      )
    );
  }
}
