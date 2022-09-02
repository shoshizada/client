import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { updateLocation } from '../../api/location';
const UpdateLocation = () => {
    const [idUpdateLocation, setidUpdateLocation] = useState("");
    const [updatelocation, setUpdateLocation] = useState({
    manager_id: "",
    system_id: "",
    location_geolocation: {
        lat:"44",
        lng:"41"
    },
    description: "",
    name:"",
    notes:"",
    communication_details: {
        phone: "",
        email: ""
    } 
    })
    const upLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateLocation(
            {
                ...updatelocation,
                [e.target.name]: e.target.value
            }
        )
    }
    const UPDATELOCATION = () => {
        const resp=updateLocation(idUpdateLocation,updatelocation);
        return resp;
    }

    return (
        <div>
            <h1>Update Location</h1>
            <Stack spacing={3}>
                    <Input onChange={upLocation} value={updatelocation.manager_id} name="manager_id" placeholder='manager_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.system_id} name="system_id" placeholder='system_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={(e) => updatelocation.location_geolocation.lat= e.target.value} name="lat" placeholder='lat' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={(e) => updatelocation.location_geolocation.lat= e.target.value}   name="lng" placeholder='lng' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation}value={updatelocation.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.name} name="name" placeholder='name'  size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation}value={updatelocation.notes} name="notes" placeholder='notes' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input  onChange={(e) => updatelocation.communication_details.phone= e.target.value} name="phone" type='tel' placeholder='Phone number'  ></Input>
                        <Input onChange={(e) => updatelocation.communication_details.email= e.target.value}  name="email" type='text' placeholder='email'  ></Input>
                    </InputGroup>
                </Stack>
            <Input onChange={(e) => setidUpdateLocation(e.target.value)} type='string' placeholder='ID OF BUSINESS TO UPDATE'></Input>
            <Button colorScheme='red' onClick={UPDATELOCATION}>UPDATE</Button>
        </div>
    )
}
export default UpdateLocation;