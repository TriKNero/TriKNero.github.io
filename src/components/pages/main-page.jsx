import React, {Component} from 'react';
import './../../App.css';
import Header from './../../components/header/header';
import Card from './../../components/card/card';

class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div
          style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}
        >
          <Card/>
        </div>
      </div>
    );
  }
}

export default MainPage;
