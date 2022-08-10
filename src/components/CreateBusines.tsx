import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import axios from 'axios';



const CreateBusines=()=>
{

    interface Business{  
        topic: string
        objName: string
        uid: string
        description: string
        phone: string
        }

  
    const [newBusiness,setNewBusiness]=useState({
        topic: "",
        objName: "",
        uid: " ", 
        description:  "",
        phone:  ""
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
    const handleSubmit=async():void => { 
            try {
                const resp = await axios.post('http://localhost:3333/user/???',newBusiness);
                console.log(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
    


        return(
            <div>
                <Stack spacing={3}>
                    <Input onChange={handleChange} value={business.topic} name="topic" placeholder='topic' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={handleChange} value={business.objName } name="objName" placeholder='object name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={handleChange}value={business.uid} name="uid" placeholder='manager uid' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={handleChange}value={business.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        />
                        <Input onChange={handleChange}value={business.phone}  name="phone" type='tel' placeholder='Phone number'  ></Input> 
                    </InputGroup>
                    <Button colorScheme='red' onClick={handleSubmit}>SUBMIT</Button>
                </Stack>
               
            </div>
        )
    } 
   
export default CreateBusines;