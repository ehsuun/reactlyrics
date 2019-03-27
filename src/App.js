import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Button,
  Heading,
  Collapsible,
  ResponsiveContext
} from 'grommet';
import { Notification } from 'grommet-icons';
import Lyrics from './Components/Lyrics';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '1' }}
    {...props}
  />
);

class App extends Component {
  state = {
    showSidebar: false,
    lyrics: [
      {
        id: 1,
        media: 'https://www.youtube.com/watch?v=cDNDVtoJhik',
        texts: [
          {
            textId: 0,
            startTime: 23.0,
            endTime: 24.0,
            text: 'بهت قول میدم'
          },
          {
            textId: 1,
            startTime: 26.0,
            endTime: 30.0,
            text: 'سخت نیست لا اقل برای تو'
          }
        ]
      }
    ]
  }

  render() {
    const { showSidebar } = this.state;
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>My App</Heading>
            <Button
              icon={<Notification />}
              onClick={() => { this.setState(prevState => ({ showSidebar: !prevState.showSidebar })) }}
            />
          </AppBar>
          <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <Box flex align='center' justify='center'>
              <Lyrics lyrics={this.state.lyrics} />
            </Box>


            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width='medium'
                background='light-2'
                elevation='small'
                align='center'
                justify='center'
              >
                sidebar
                      </Box>
            </Collapsible>


          </Box>
        </Box>
      </Grommet>

    );
  }
}

export default App;
