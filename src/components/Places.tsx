import React, { useMemo } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import {
    Combobox,ComboboxInput,ComboboxPopover,ComboboxList,ComboboxOption
} from '@reach/combobox'
import axios from "axios";

type placesProps = {
    setOffice:(position:google.maps.LatLngLiteral)=>void;
}
// import Location from'../components/Location/AddLocation'
// import { Location } from "history";
export interface Location
{
    manager_id: string;
    system_id: string;
    location_geolocation: {
        lat: string,
        lng: string
    };
    description: string;
    name: string;
    notes: string;
    communication_details: {
        phone: string;
        email: string;
    }
}

const Places=({setOffice}:placesProps)=>
{
const {ready ,value ,setValue ,suggestions:{status,data} ,clearSuggestions} = usePlacesAutocomplete();
const locations=useMemo(()=>g(),[])  
  console.log('🐰',locations[0]);



   function degreesToRadians(degrees: number) {
        return (degrees * Math.PI) / 180;
    }
    function getDistanceBetweenPoints(
        lat1: number,
        lng1: number,
        lat2: number,
        lng2: number
    ) {
        // The radius of the planet earth in meters
        let R = 6378137;
        let dLat = degreesToRadians(lat2 - lat1);
        let dLong = degreesToRadians(lng2 - lng1);
        let a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(degreesToRadians(lat1)) *
            Math.cos(degreesToRadians(lat1)) *
            Math.sin(dLong / 2) *
            Math.sin(dLong / 2);

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        let distance = R * c;
        return distance;
    }





  async function find_closest_marker(lat: number, lng: number) {
        debugger;
        let distances = [];
        let closest = -1;
        debugger;
        // const ff = await generateHouses();
        // console.log(ff[0].lat)
        // alert(ff[0])
        // const a = [{ lat: 8, lng: 7 }, { lat: 32, lng: 35 }, { lat: 31, lng: 34 }, { lat: 30, lng: 36 }];
        // const index = new Array(3);
            let mid=99999999;
            let min=9999999999993;
            let max=0;
            let value1=10;
            let value2=10;
            let value3=10;
        for (let i = 0; i < locations.length; i++) {
            debugger;
            // const d = google.maps.geometry.spherical.computeDistanceBetween(position, latlng);
            const d = getDistanceBetweenPoints(
                Number( locations[i].location_geolocation.lat),
                Number(locations[i].location_geolocation.lng),
                lat,
                lng
            );
            debugger;
            distances[i] = d;
            if(distances[i]<mid)
              max=mid;
              value3=value2;
              mid=distances[i];
              value2=i;
            if(distances[i]<min)
                min=distances[i];
                value1=i;
            console.log("min👶:",min ,"mid👩:",mid, "max👵:",max );
            console.log("value1:👆",value1,"value2✌:",value2,"value3🤟:",value3);
            //   if (closest == -1 || d < distances[closest]) {
            //     debugger;
            //     closest = i;
            //   }
            console.log("😍yami........", distances);

            } 
 }
const handleSelect= async (val:string)=>
{
setValue(val,false);
clearSuggestions();
        // const result = await getGeocode({ address: val });
        getGeocode({ address: val })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log("📍 Coordinates: ", { lat, lng });
                setOffice({ lat, lng });
                debugger;
                //   console.log(locations.map(element => element.lat));

                find_closest_marker(lat, lng);
            })
            .catch((error) => {
                debugger;
                console.log("😱 Error: ", error);
            });
        // };
        // console.log(result);
 
 }

return(
    <>
    <Combobox onSelect={handleSelect}>
        <ComboboxInput value={value} onChange={e=>setValue(e.target.value)} disabled={!ready}
           placeholder="search your adress"  className="combobox-input"/> 
           <ComboboxPopover>
            <ComboboxList>
                {status === "OK" &&data.map(({place_id,description})=>
               (<ComboboxOption key={place_id} value={description} className="combobox-option"/>))}
            </ComboboxList>
           </ComboboxPopover>
    </Combobox>
    </>
)
}

const g= ()=>
{
  let data;
  const h: Array<Location>=[];
//   const h: Array<LatLngLiteral>=[];
  try {
        axios.get('http://localhost:3333/location').then((res)=>{data=res.data.forEach(((l:Location)=>h.push(l)));
                  console.log('🦄',data)
          //  res.data.forEach((l:Location )=>{ h.push({l
               })}
   catch (error) {
    console.log(error);
  }
  return h;
}

export default Places;