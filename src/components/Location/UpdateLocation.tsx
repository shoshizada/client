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
        lat: "",
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
    const upLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateLocation(
            {
                ...updatelocation,
                [e.target.name]: e.target.value
            }
        )
    }
    const UPDATELOCATION = () => {
        updateLocation(idUpdateLocation,updatelocation);
    }

    return (
        <div>
            <h1>Update Location</h1>
            <Stack spacing={3}>
                    <Input onChange={upLocation} value={updatelocation.manager_id} name="manager_id" placeholder='manager_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.system_id} name="system_id" placeholder='system_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.location_geolocation.lat} name="lat" placeholder='lat' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.location_geolocation.lng} name="lng" placeholder='lng' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation}value={updatelocation.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation} value={updatelocation.name} name="urlName" placeholder='name'  size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={upLocation}value={updatelocation.notes} name="notes" placeholder='notes' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={upLocation}value={updatelocation.communication_details.phone}  name="phone" type='tel' placeholder='Phone number'  ></Input>
                        <Input onChange={upLocation}value={updatelocation.communication_details.email}  name="email" type='text' placeholder='email'  ></Input>
                    </InputGroup>
                </Stack>
            <Input onChange={(e) => setidUpdateLocation(e.target.value)} type='string' placeholder='ID OF BUSINESS TO UPDATE'></Input>
            <Button colorScheme='red' onClick={UPDATELOCATION}>UPDATE</Button>
        </div>
    )
}
export default UpdateLocation;