import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import {GoogleMap,useLoadScript,Marker}from "@react-google-maps/api";


const center={lat:40,lng:-80};
const Map=()=>
{
  const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyC3OCX35jO7Q0qKZn89UfSQUBYXMpTdl3E",
  libraries:["places"],

  
  })
if(!isLoaded) return<div>Loading...</div>;
return(

            <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"} 
            >
            <Marker position={center}></Marker>
            </GoogleMap>
            
        )
    } 
   
export default Map;