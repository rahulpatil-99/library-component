import React, { Component } from 'react';
import LeftNav from './LeftNav';
import MainWindow from './MainWindow';
import '../css/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
          <LeftNav />
          <MainWindow />
      </div>
    );
  }
}

export default Main;
