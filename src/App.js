import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Welcome from './components/welcome/welcome';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Welcome/>
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </header>
      </div>
    );
  }
}

export default App;
