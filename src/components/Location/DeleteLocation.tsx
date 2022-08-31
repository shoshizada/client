import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
// import { PhoneIcon } from '@chakra-ui/icons';
import { deleteLocation } from '../../api/location';



const DeleteLocation = () => {
    const [idDelLocatin, setIdDelLocation] = useState("");

    const deleteBusiness = () => {
        deleteLocation(idDelLocatin);
    }

    return (
        <div>

            <Input onChange={(e) => setIdDelLocation(e.target.value)} type='string' placeholder='ID OF BUSINESS TO DELETE'></Input>
            <Button colorScheme='red' onClick={deleteBusiness}>DELETE</Button>
        </div>
    )
}

export default DeleteLocation;