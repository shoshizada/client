import React, { useState } from 'react';
import { Button, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { createSystem, getAllSystems,deleteSystem, updateSystem } from '../../api/system';
import { observer } from 'mobx-react';
import { Manager } from '../Manager/manager';
import user from '../../api/user';
import system from '../../api/system';

const CreateManager=()=>
{
    const [newBusiness,setNewBusiness]=useState({
        user_id: user.user.firebase_uid,
        system_id: system.system.name,
        active: true,
        display_name: "string",
        role: 'admin',
        invitation_sent: true
        
})

        return(
            <div>
                <h1>Add Business</h1>
            </div>
        )
    } 
   
export default observer(CreateManager);