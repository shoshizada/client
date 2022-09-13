
import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createSystem, getAllSystems,deleteSystem, updateSystem } from '../../api/system';
import { observer } from 'mobx-react';
import { Manager } from '../Manager/manager';
import { createRequest } from '../../api/request';

export interface Request {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    system_id:string;
    display_name: string
    status: string;
    notes: string;
}

const CreateReqest=()=>
{
    const [newRequest,setNewRequest]=useState({
   
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    system_id:"",
    display_name: "",
    status: "",
    notes: "",
        
})
    const addRequest=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setNewRequest(
            {
                ...newRequest,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=async() => { 
        console.log(newRequest)
         const resp = createRequest(newRequest)
        
    }

        return(
            <div>
                <h1>Add Request</h1>
                
                <Stack spacing={3}>
                    <Input role="contentinfo" onChange={addRequest} defaultValue={newRequest.firstName} name="firstName" placeholder='firstName' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addRequest} value={newRequest.lastName} name="lastName" placeholder='lastName' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addRequest}value={newRequest.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addRequest}value={newRequest.phone} name="phone" placeholder='phone' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addRequest}value={newRequest.system_id} name="system_id" placeholder='system_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addRequest}value={newRequest.display_name} name="display_name" placeholder='display_name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input  onChange={addRequest}value={newRequest.status} name="status" placeholder='status' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addRequest}value={newRequest.notes} name="notes" placeholder='notes' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>   
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={addRequest}value={newRequest.phone}  name="phone" type='tel' placeholder='Phone number'></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>create request</Button>
                </Stack>
            </div>
        )
    } 
   
export default observer(CreateReqest);