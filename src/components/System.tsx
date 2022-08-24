import { Button, Input, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSystemByManagerId } from "../api/system";
import Map from './Map'
import { FaUserCircle } from "react-icons/fa";
import Place from './Place'
import { GoogleMap } from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;

const System=()=>
{
    
    const [search,setSearch]=useState("");
    const{uid}=useParams();
    const dataSystem=getSystemByManagerId(uid!)
    const f=1;
    const mapRef=useRef<GoogleMap>();
    const navigate = useNavigate();

   
    if(f==1)
    {
    return(
        <>
     <Stack direction='row'>
   <  FaUserCircle style={{color: 'grey', fontSize: '50px', marginLeft:'50px', marginTop:'7px'}}/>
     <Button id="buttonSystem" style={{borderRadius:'10%',backgroundColor:'grey' ,height:'45px', marginTop:'10px',marginLeft:'50px'}}colorScheme='Red 400' variant='solid' onClick={()=>navigate("/hello")}> EDIT YOUR SYSTEMS </Button>
     </Stack>
     <Map></Map>
        </>
    )}
    else{
        return(
       
        <>
      
        {/* <p>
            {dataSystem.topic}
            {dataSystem.description}
        </p> */}
           <Input onChange={(e) => setSearch(e.target.value)} type='string' placeholder='SEARCH'></Input>
        <Map></Map>
        
        </>
    )}
    }
export default System;