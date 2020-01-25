import React, { Component } from 'react';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <Form />
        <Ideas />
      </div>
    );
  }
}

export default App;
