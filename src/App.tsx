import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';


function App() {
  return (
    <div className="App">
      <h1>people invited to my party</h1>
      <List />
    </div>
  );
}

export default App;
