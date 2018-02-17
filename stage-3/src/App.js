import React, { Component } from 'react';
import Routes from './routes';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {connect} from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          {Routes}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => state;
export default connect(mapStateToProps)(App);
