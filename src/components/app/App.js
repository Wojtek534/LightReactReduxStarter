import React, {Component} from 'react';
import logo from '../../logo.svg';
import Router from '../Router';
import Navbar from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome</h1>
        </header>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
