import React, { Component } from 'react';
import MainPage from './components/pages/main-page';
import {MuiThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {theme} from './components/material-theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}/>
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
