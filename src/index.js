import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  indigo900, indigo700, indigo500, redA200
} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import 'normalize.css'

import Home from './components/Home'
import Cache from './components/Cache';
import NotFound from './components/NotFound';
import HeaderNav from './components/HeaderNav'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
    accent1Color: redA200,
    pickerHeaderColor: indigo500,
  },
  appBar: {
    height: 80
  }
})

const Root = () => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <BrowserRouter>
        <div>
          <HeaderNav />
          
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/cache/:cacheId" component={Cache} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

render(<Root/>, document.querySelector('#main'));
