
import React, { useCallback, useMemo, useRef, useState } from "react";
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
// import { position } from "@chakra-ui/react";
import Distance from "./Distance";

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;


const Map = () => {
  const [office,setOffice]=useState<LatLngLiteral|any>()
  const [directions,setDirections]=useState<DirectionsResult|any>();
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(() => ({ lat: 43, lng: -88 }), []);
  const onLoad=useCallback((map:any)=>(mapRef.current=map),[]);
  const house=useMemo(()=>g(center),[center])

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
        <h1>Commute?</h1>
        <Places setOffice={(position)=>{
          setOffice(position);
          mapRef.current?.panTo(position)
        }}/> 

        {!office && <p>fffff</p>}
        {/* {!directions && <Distance leg={directions.routes[0].legs[0]}/>} */}
      </div>
      <div className="map">
        <GoogleMap zoom={10} center={center} mapContainerClassName={"map-container"}onLoad={onLoad} >
          {/* <Marker position={office}></Marker> */}
          
        {directions && <DirectionsRenderer directions={directions} options={{ polylineOptions:{
          zIndex:50,
          strokeColor:"#1976D2",
          strokeWeight:5
        }}}/>}

          {office &&(
             <>
             <Marker position={office} /> 

             <MarkerClusterer>
              {(clusterer:any|MarkerClustererProps | Readonly<MarkerClustererProps>): any=>
               house.map((h) => (
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
}

;

const g= (position:LatLngLiteral)=>
{
  const h: Array<LatLngLiteral>=[];

  for(let i=0;i<100;i++)
  {
    const d=Math.random() < 0.5 ?-2 : 2;
    h.push({
      lat:position.lat+Math.random()/d,
      lng:position.lng+Math.random()/d,
    });
  }
  return h;
}


export default Map


