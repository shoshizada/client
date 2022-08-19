import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import CreateBusines from './components/CreateBusines';
import GetSystem from './components/GetSystem';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';

function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
    <Routes> 
      <Route  path="/register" element={<Register />} />
      <Route  path="/reset" element={<Reset />} />
      <Route  path="/dashboard" element={<Dashboard />} />
      <Route path="/add" element={<CreateBusines/>} />
      <Route path="/system" element={<GetSystem/>} />
      <Route path="/*" element={<Login/>} />
    </Routes>
  </div>

  );
}

export default App;
