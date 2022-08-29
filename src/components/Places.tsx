import React from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import {
    Combobox,ComboboxInput,ComboboxPopover,ComboboxList,ComboboxOption
} from '@reach/combobox'

type placesProps = {
    setOffice:(position:google.maps.LatLngLiteral)=>void;
}


const Places=({setOffice}:placesProps)=>
{
const {ready ,value ,setValue ,suggestions:{status,data} ,clearSuggestions} = usePlacesAutocomplete();

const handleSelect= async (val:string)=>
{
setValue(val,false);
clearSuggestions();

const results=await getGeocode({address:val});
const {lat,lng}=await getLatLng(results[0]);
setOffice({lat,lng});
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
export default Places;