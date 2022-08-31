import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { updateSystem } from '../../api/system';



const UpdateBusines = () => {

    const [idUpdateBusiness, setIdUpdateBusiness] = useState("");


    const [newBusiness, setUpdateBusines] = useState({
    admin_id: "",
    name: "",
    description: "",
    subject: "",
    phone: "",
    email: "",
    })



    const updateBusines = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateBusines(
            {
                ...newBusiness,
                [e.target.name]: e.target.value
            }
        )
    }



    const updateBusiness = () => {
        updateSystem(idUpdateBusiness, newBusiness);
    }
   
    return (
        <div>

            <h1>Update Business</h1>
            <Stack spacing={3}>
                <Input onChange={updateBusines} defaultValue={newBusiness.admin_id} name="admin_id" placeholder='admin_id' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                <Input onChange={updateBusines} value={newBusiness.name} name="name" placeholder='name' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                <Input onChange={updateBusines} value={newBusiness.subject} name="subject" placeholder='subject' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                <Input onChange={updateBusines} value={newBusiness.description} name="description" placeholder='description' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                <Input onChange={updateBusines} value={newBusiness.phone} name="phone" placeholder='phone' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                <Input onChange={updateBusines} value={newBusiness.email} name="email" placeholder='email' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input>
                {/* <Input onChange={updateBusines} value={newBusiness.urlName} name="urlName" placeholder='manager urlName' size='md' isInvalid errorBorderColor='red.300' _placeholder={{ opacity: 0.4, color: 'orange' }}  ></Input> */}
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                    />
                    <Input onChange={updateBusines} value={newBusiness.phone} name="phone" type='tel' placeholder='Phone number'></Input>
                </InputGroup>
            </Stack>


            <Input onChange={(e) => setIdUpdateBusiness(e.target.value)} type='string' placeholder='ID OF BUSINESS TO UPDATE'></Input>
            <Button colorScheme='red' onClick={updateBusiness}>UPDATE</Button>

        </div>
    )
}

export default UpdateBusines