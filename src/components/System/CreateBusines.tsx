import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createSystem, getAllSystems,deleteSystem, updateSystem } from '../../api/system';

export interface Business
{ 
   
       topic: string
        objectName: string
        owner: string
        description: string
        phone: string
        email: string
        uid:string
}

const CreateBusines=()=>
{
// const [idDelBusiness,setIdDelBusiness] = useState("");
// const [idUpdateBusiness,setIdUpdateBusiness] = useState("");

  
    const [newBusiness,setNewBusiness]=useState({
        topic: "",
        objectName: "",
        owner:"",
        description:"",
        phone:  "",
        email: "",
        uid: " ", 
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
         const resp = createSystem(newBusiness)
        
    }
//
// const deleteBusiness=()=>{
//     deleteSystem(idDelBusiness);
// }

// const updateBusiness=()=>{
//     updateSystem(idUpdateBusiness,newBusiness);
// }

        return(
            <div>
                <Stack spacing={3}>
                    <Input onChange={addBusiness} value={newBusiness.topic} name="topic" placeholder='topic' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addBusiness} value={newBusiness.objectName } name="objectName" placeholder='object name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input onChange={addBusiness} value={newBusiness.owner } name="owner" placeholder='owner' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.phone} name="phone" placeholder='phone' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.uid} name="uid" placeholder='manager uid' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={addBusiness}value={newBusiness.phone}  name="phone" type='tel' placeholder='Phone number'></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>ADD</Button>
                </Stack>
                
                {/* <Input onChange={(e)=>setIdUpdateBusiness(e.target.value)}  type='string' placeholder='ID OF BUSINESS TO UPDATE'></Input> 
                <Button colorScheme='red' onClick={updateBusiness}>UPDATE</Button>
                <Input onChange={(e)=>setIdDelBusiness(e.target.value)}  type='string' placeholder='ID OF BUSINESS TO DELETE'></Input> 
                <Button colorScheme='red' onClick={deleteBusiness}>DELETE</Button> */}
            </div>
        )
    } 
   
export default CreateBusines;