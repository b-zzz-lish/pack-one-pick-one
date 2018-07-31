import React, { Component } from 'react';
import './App.css';
import PackPicker from './PackPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PackPicker set='aer' />
      </div>
    );
  }
}

export default App;
