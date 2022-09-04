import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createSystem, getAllSystems,deleteSystem, updateSystem } from '../../api/system';
import { observer } from 'mobx-react';
import { Manager } from '../Manager/manager';

export interface Business
{ 
    // id: string;
    admin_id: string;
    name: string;
    description: string;
    subject: string;
    phone: string;
    email: string;
  

}

const CreateBusines=()=>
{
    const [newBusiness,setNewBusiness]=useState({
   
    admin_id: "",
    name: "",
    description: "",
    subject: "",
    phone: "",
    email: "",
        
})
    const addBusiness=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setNewBusiness(
            {
                ...newBusiness,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=async() => { 
        console.log(newBusiness)
         const resp = createSystem(newBusiness)
        
    }

        return(
            <div>
                <h1>Add Business</h1>
                
                <Stack spacing={3}>
                    <Input onChange={addBusiness} defaultValue={newBusiness.admin_id} name="admin_id" placeholder='admin_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addBusiness} value={newBusiness.name } name="name" placeholder='name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.subject} name="subject" placeholder='subject' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.phone} name="phone" placeholder='phone' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={addBusiness}value={newBusiness.phone}  name="phone" type='tel' placeholder='Phone number'></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>ADD</Button>
                </Stack>
            </div>
        )
    } 
   
export default observer(CreateBusines);