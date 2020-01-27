import React from 'react';
import Form from '../Form/Form';
import Ideas from '../Ideas/Ideas';
import './App.css';

const App = () => {

    return (
      <div className="App">
        <h1>Ideabox with Hooks</h1>
        <Form />
        <Ideas />
      </div>
    );
}

export default App;
