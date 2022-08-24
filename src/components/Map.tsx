import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { GoogleMap, useLoadScript, Marker ,Circle} from "@react-google-maps/api";
import Place from './Place';

type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type mapOptions = google.maps.MapOptions;


const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3OCX35jO7Q0qKZn89UfSQUBYXMpTdl3E",
    libraries: ["places"],
  }
  )
  const [office,setOffice] = useState<LatLngLiteral>();
  const mapRef=useRef<GoogleMap>();
  const center =useMemo<LatLngLiteral>(()=>({ lat: 40, lng: -80 }), []);
  const JerusalemPosition =useMemo<LatLngLiteral>(()=>({ lat: 31.771959, lng: 35.217018 }), []);

  const options = useMemo<mapOptions>(()=>({
  disableDefaultUI: true,
  clickablrIcons:false,
}),[]);
const onLoad = useCallback((map:any)=>(mapRef.current=map),[]);

const _houses = useMemo(() => 
generateHouses(JerusalemPosition)
,[center]);

if (!isLoaded)
return <div>Loading...</div>;

  return (
    <>
    <Place 
            setOffice={(position)=>{
            setOffice(position);
            mapRef.current?.panTo(position);
        }}/>
    <GoogleMap zoom={10}
     center={center}
      mapContainerClassName={"map-container"} 
      options={options}
       onLoad={onLoad}  >

      {office && (
        <>
      <Marker position={office} />
     
        {_houses.map(h=> <Marker key={h.lat} position={h} />)}
      {/* {_houses.map((house:any)=>(<Marker key={house.lat} position={house} />))} */}


      <Circle center={office} radius={7000} options={closeOptions}/>
      <Circle center={office} radius={13000} options={middleOptions}/>
      <Circle center={office} radius={19000} options={farOptions}/>

      </>
      )}
    </GoogleMap>
    </>

  )
      }

  const defaultOptions = {
    strokeOpacity:0.5,
    strokeWeight:2,
    clickable:false,
    draggable:false,
    editable:false,
    visable:false,
  }

  const closeOptions = {
    ...defaultOptions,
    zindex:2,
    fillOpacity:0.05,
    strokeColor:"#8BC34A",
    fillColor:"#8BC34A",
  }

  const middleOptions = {
    ...defaultOptions,
    zindex:2,
    fillOpacity:0.05,
    strokeColor:"#FBC02D",
    fillColor:"#FBC02D",
  }

  const farOptions = {
    ...defaultOptions,
    zindex:2,
    fillOpacity:0.05,
    strokeColor:"#FF5252",
    fillColor:"#FF5252",
  }

  const generateHouses = (position:LatLngLiteral)=>{
    // alert("generateHouses")
    const houses:Array<LatLngLiteral> =[];
    for(let i=0; i<5; i++) {
      const direction = Math.random()<0.5 ? -2 : 2;
      houses.push({
        lat:position.lat*Math.random()/direction,
        lng:position.lng*Math.random()/direction,
      });
    }
    return houses;
  }


export default Map;