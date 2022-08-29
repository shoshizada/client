import React, { useState } from 'react';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
const values = ["Google, Breithaupt Street, Kitchener, ON, Canada", "Isabella","Brasov", "Prosperity", "Jerusalem"];

type PlaceProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
}

const Place = ({ setOffice }: PlaceProps) => {

    // const {ready,value, setValue, suggestions: {status, data},clearSuggestions} = usePlacesAutocomplete();
    const [inputVal, setInputVal] = useState("");

    const handleSelection = async (val: string) => {

        const result = await getGeocode({ address: val });
        const { lat, lng } = await getLatLng(result[0]);
        setOffice({lat,lng});
    }


    return (
        <Combobox onSelect={handleSelection}>
            <ComboboxInput onChange={e => setInputVal(e.target.value)} />
            <ComboboxPopover>
                <ComboboxList>
                    {values.map((val) => (
                        <ComboboxOption value={val} />
                    ))}
                    
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
}
export default Place;