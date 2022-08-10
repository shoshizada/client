import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import axios from 'axios';



const CreateBusines=()=>
{

    interface Business{  
        topic: string
        objName: string
        owner: string
        description: string
        phone: string
        email: string
        }

  
    const [newBusiness,setNewBusiness]=useState({
        topic: "",
        objName: "",
        owner: " ", 
        description:  "",
        phone:  "",
        email: ""
        })
 


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>
    {
        setNewBusiness(
            {
                ...newBusiness,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=async() => { 
            try {
                const resp = await axios.post('http://localhost:3333/system',newBusiness);
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
    


        return(
            <div>
                <Stack spacing={3}>
                    <Input onChange={handleChange} value={newBusiness.topic} name="topic" placeholder='topic' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={handleChange} value={newBusiness.objName } name="objName" placeholder='object name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input onChange={handleChange} value={newBusiness.owner } name="owner" placeholder='owner' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={handleChange}value={newBusiness.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={handleChange}value={newBusiness.phone}  name="phone" type='tel' placeholder='Phone number'  ></Input>
                        <Input onChange={handleChange}value={newBusiness.email}  name="email" type='text' placeholder='email'  ></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>SUBMIT</Button>
                </Stack>
               
            </div>
        )
    } 
   
export default CreateBusines;