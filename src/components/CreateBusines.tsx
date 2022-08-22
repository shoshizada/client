import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import axios from 'axios';

const CreateBusines=()=>
{

    interface Business{  
        topic: string
        objectName: string
        owner: string
        description: string
        phone: string
        email: string
        urlName:string
        }

  
    const [newSystem,setNewSystem]=useState({
        topic: "",
        objectName: "",
        owner: " ", 
        description:  "",
        phone:  "",
        email: "",
        urlName:""
        })
 


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setNewSystem(
            {
                ...newSystem,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=async() => { 
        console.log(newSystem);
            try {
                const resp = await axios.post('http://localhost:3333/system',newSystem);
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
    


        return(
            <div>
                <Stack spacing={3}>
                    <Input onChange={handleChange} value={newSystem.topic} name="topic" placeholder='topic' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={handleChange} value={newSystem.objectName } name="objectName" placeholder='object name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input onChange={handleChange} value={newSystem.owner } name="owner" placeholder='owner' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input onChange={handleChange}value={newSystem.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input onChange={handleChange} value={newSystem.urlName} name="urlName" placeholder='urlName' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={handleChange}value={newSystem.phone}  name="phone" type='tel' placeholder='Phone number'  ></Input>
                        <Input onChange={handleChange}value={newSystem.email}  name="email" type='text' placeholder='email'  ></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>SUBMIT</Button>
                </Stack>
               
            </div>
        )
    } 
   
export default CreateBusines;