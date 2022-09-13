import React from 'react';
import './App.css';
// import { useState } from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import SignUP from './components/SingUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UpdateBusines from './components/System/UpdateBusines';
import GetBusines from './components/System/GetBusines';
import DeleteBusines from './components/System/DeleteBusiness';
// import GetBusinessById from './components/System/GetBusinessById';
import Map from './components/Map';
import AdminBar from './components/Admin/AdminBar'
import EditBranches from './components/Admin/EditBranches';
import System from './components/System';
import Hello from './components/System/Hello';
import { AddLocationAlt } from '@mui/icons-material';
import CreateLocation from './components/Location/AddLocation';
import DeleteLocation from './components/Location/DeleteLocation';
import UpdateLocation from './components/Location/UpdateLocation';
import GetBusinessById from './components/System/GetBusinessById';
import CreateBusines from './components/System/CreateBusines';
import CreateReqest from './components/Reqest/CreateReqest';
import GetRequestById from './components/Reqest/GetRequestById';
export default function App() {
  return (
  //   // <GetBusines />
  // // < CreateLocation/>
  //    <UpdateLocation/>
    <div className="app">
      {/* <Map></Map> */}
      {/* <System></System> */}
       {/* <CreateLocation /> */}
       {/* <img src="././components/System/image (64).png"/> */}
     <Router>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/admin" element={<AdminBar />} />
        <Route path="/edit" element={<EditBranches />} />
        <Route path="/signUp" element={<SignUP />} />
         <Route path="/" element={<System />} />
        <Route path="/signUp" element={<SignUP />} />
        <Route path="/system" element={<GetBusines />} />
        <Route path="/getsystem" element={<GetBusines />} />
        <Route path="/createsystem" element={<CreateBusines />} />
        <Route path="/updatesystem" element={<UpdateBusines />} />
         <Route path="/deletesystem" element={<DeleteBusines />} />
        <Route path="/createlocation" element={<CreateLocation />} />
        <Route path="/updatelocation" element={<UpdateLocation />} />
        <Route path="/deletelocation" element={<DeleteLocation />} />
        <Route path="/getsystembyid" element={<GetBusinessById />} />
         <Route path="/createreqest" element={<CreateReqest />} />
        <Route path="/getreqestbyid" element={<GetRequestById />}/>
        <Route path="/map" element={<Map/>} />
                <Route path="/hello" element={<Hello/>} />
      </Routes>
    </Router>
  </div>
  );
}