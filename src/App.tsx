import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import CreateBusines from './components/CreateBusines';
import GetSystem from './components/GetSystem';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import UpdateBusines from './components/System/UpdateBusines';
import GetBusines from './components/System/GetBusines';
import DeleteBusines from './components/System/DeleteBusiness';
import GetBusinessById from './components/System/GetBusinessById';

function App() {
  return (
    <div className="app">
      <img src="client\src\css\image (62).png" />
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/getsystem" element={<GetBusines />} />
        <Route path="/createsystem" element={<CreateBusines />} />
        <Route path="/updatesystem" element={<UpdateBusines />} />
         <Route path="/deletesystem" element={<DeleteBusines />} />
        <Route path="/getsystembyid" element={<GetBusinessById />} />
      </Routes>
      
    </Router>
  </div>

  );
}

export default App;
