import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import CreateBusines from './components/CreateBusines';
import GetSystem from './components/GetSystem';

function App() {
  return (
    <div className="App">

      {/* <Login/>  */}
      <List />
      <CreateBusines/>
      <GetSystem/>
    </div>
  );
}

export default App;
