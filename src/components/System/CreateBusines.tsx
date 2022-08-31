import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createSystem, getAllSystems,deleteSystem, updateSystem } from '../../api/system';

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
// const [idDelBusiness,setIdDelBusiness] = useState("");
// const [idUpdateBusiness,setIdUpdateBusiness] = useState("");

  
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
//
// const deleteBusiness=()=>{
//     deleteSystem(idDelBusiness);
// }

// const updateBusiness=()=>{
//     updateSystem(idUpdateBusiness,newBusiness);
// }

        return(
            <div>
                <h1>Add Business</h1>
                
                <Stack spacing={3}>
                    <Input onChange={addBusiness} defaultValue={newBusiness.admin_id} name="admin_id" placeholder='admin_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                    <Input onChange={addBusiness} value={newBusiness.name } name="name" placeholder='name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    {/* <Input onChange={addBusiness} value={newBusiness.owner } name="owner" placeholder='owner' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>  */}
                    <Input  onChange={addBusiness}value={newBusiness.subject} name="subject" placeholder='subject' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.phone} name="phone" placeholder='phone' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    <Input  onChange={addBusiness}value={newBusiness.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> 
                    {/* <Input  onChange={addBusiness}value={newBusiness.urlName} name="urlName" placeholder='manager urlName' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>  */}
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