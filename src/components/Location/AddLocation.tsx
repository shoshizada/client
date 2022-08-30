import react from 'react';
import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createLocation } from '../../api/location';
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
        phone: string,
        email: string
    }
}
const CreateLocation=()=>
{
    const [newLocation,setnewLocation]=useState({
     manager_id: "",
    system_id: "",
    location_geolocation: {
        lat:"",
        lng: ""
    },
    description: "",
    name: "",
    notes:"",
    communication_details: {
        phone: "",
        email: ""
    } 
        })
    const addLocation=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setnewLocation(
            {
                ...newLocation,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=async() => {
         const resp = createLocation(newLocation)
    }
    return  (
            <div>
                <h1>Add Location</h1>
                <Stack spacing={3}>
                    <Input onChange={addLocation} value={newLocation.manager_id} name="manager_id" placeholder='manager_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addLocation} value={newLocation.system_id} name="system_id" placeholder='system_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addLocation} value={newLocation.location_geolocation.lat} name="lat" placeholder='lat' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addLocation} value={newLocation.location_geolocation.lng} name="lng" placeholder='lng' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input  onChange={addLocation}value={newLocation.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input  onChange={addLocation}value={newLocation.name} name="name" placeholder='name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input  onChange={addLocation}value={newLocation.notes} name="notes" placeholder='notes' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={addLocation}value={newLocation.communication_details.phone}  name="phone" type='tel' placeholder='Phone number'></Input>
                    </InputGroup>
                    <Input  onChange={addLocation}value={newLocation.communication_details.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Button colorScheme='red' onClick={handleSubmit}>ADD</Button>
                </Stack>
                </div>
            
     )
}
export default CreateLocation; 