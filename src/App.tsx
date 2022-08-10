import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import CreateBusines from './components/CreateBusines';

function App() {
  return (
    <div className="App">
      <h1>people invited to my party</h1>
      {/* <Login/>  */}
      <List />
      <CreateBusines/>
    </div>
  );
}

export default App;
