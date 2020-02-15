import React from 'react';
import './App.css';
import Clicky from './Clicky.js';
import Title from './Title.js';

function App() {
  return (
    <div className="App">
        <Clicky count={0} />
        <Title title={'hooky'} />
    </div>
  );
}

export default App;
