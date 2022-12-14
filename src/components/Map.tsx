
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  Circle,
  MarkerClusterer,
  useLoadScript,
  MarkerClustererProps
} from '@react-google-maps/api'
import Places from './Places'
import axios from 'axios';
import Distance from "./Distance";
import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { MenuIcon } from "@chakra-ui/react";
import AdminBar from "./Admin/AdminBar";


type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;


const Map = () => {
  const [office,setOffice]=useState<LatLngLiteral|any>()
  const [directions,setDirections]=useState<DirectionsResult|any>();
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 32, lng: 35 }), []);
  const onLoad=useCallback((map:any)=>(mapRef.current=map),[]);
 

  const house=useMemo(()=>g(),[center])  
  console.log(house.map(element => element.lat));
    
  
  

  

  const fetchDirections=(house:LatLngLiteral)=>
  {
    if(!office) return;
    const service=new google.maps.DirectionsService();
    service.route(
      {
        origin:house,
        destination:office,
        travelMode:google.maps.TravelMode.DRIVING
      },
      (result,status)=>
      {
        if(status==='OK' &&result){
          setDirections(result)
        }
      }
    )

  }

  // const center={lat:40,lng:-80};
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3OCX35jO7Q0qKZn89UfSQUBYXMpTdl3E",
    libraries: ["places"],


  })
  if (!isLoaded) return <div>Loading...</div>;
  return (


    <div className="container">
      <div className="controls">
       {/* <AdminBar/> */}
        <h1>Commute?</h1>
        <Places setOffice={(position)=>{
          setOffice(position);
          mapRef.current?.panTo(position)
        }}/> 

        {!office && <p></p>}
        {/* {!directions && <Distance leg={directions.routes[0].legs[0]}/>} */}
      </div>
      <div className="map">
 
        <GoogleMap zoom={10} center={{ lat: 32, lng: 35 }} mapContainerClassName={"map-container"}onLoad={onLoad} >
          {/* <Marker position={office}></Marker> */}
          
        {directions && <DirectionsRenderer directions={directions} options={{ polylineOptions:{
          zIndex:50,
          strokeColor:"#1976D2",
          strokeWeight:5
        }}}/>}

          {office &&(
             <>
             debugger;
             <Marker position={office} /> 
             debugger;
             <MarkerClusterer>
              {(clusterer:any|MarkerClusterer | Readonly<MarkerClusterer>): any=>
               house.map((h:LatLngLiteral) => (
              <Marker
                key={h.lat}
                position={h}
                clusterer={clusterer}
                onClick={()=>{
                  fetchDirections(h)
                }}
                />
                ))
                }
             </MarkerClusterer>

           

             <Circle center={office} radius={1500}
             options={{fillColor:'green',fillOpacity:0.1,strokeColor:'green'}}/>
          <Circle center={office} radius={3000}
             options={{fillColor:'orange',fillOpacity:0.1,strokeColor:'orange'}}/>
          <Circle center={office} radius={4500}
             options={{fillColor:'red',fillOpacity:0.1,strokeColor:'red'}}/>
          </> 

          )}
          
          
        </GoogleMap>
      </div>
    </div>
  )
};

const g=  ()=>
{
  let data;
  const h: Array<LatLngLiteral>=[];
  try {
        axios.get('http://localhost:3333/location').then((res)=>{data=res
       res.data.forEach((l: { location_geolocation: { lat: any; lng: any; }; })=>{h.push({
       lat:Number(l.location_geolocation.lat),
       lng:Number(l.location_geolocation.lng)
    })})
  });
  console.log(h)
  } catch (error) {
    console.log(error);
  }
  return h;
}
export default Map;

 