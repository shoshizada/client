import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons';
import { deleteSystem } from '../../api/system';



const DeleteBusines = () => {
    const [idDelBusiness, setIdDelBusiness] = useState("");

    const deleteBusiness = () => {
        deleteSystem(idDelBusiness);
    }

    return (
        <div>

            <Input onChange={(e) => setIdDelBusiness(e.target.value)} type='string' placeholder='ID OF BUSINESS TO DELETE'></Input>
            <Button colorScheme='red' onClick={deleteBusiness}>DELETE</Button>
        </div>
    )
}

export default DeleteBusines;