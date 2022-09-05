import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems, getSystemByManagerId } from '../../api/system';
import { observer } from 'mobx-react';
    interface System{
    _id: string;
    admin_id: string;
    name: string;
    description: string;
    subject: string;
    phone: string;
    email: string;
        }
const GetSystemById=()=>
{
      const navigate = useNavigate();
         const [idGetBusiness, setIdGetBusiness] = useState("");
    const [system,setSystem] = useState<System>();
    const getSystem = async ()=> {
         const res =getSystemByManagerId(idGetBusiness);
        console.log(res);
        setSystem(await res);
        }
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/updatesystem');
      };
   const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/deletesystem');
      };

        return (
            <>
            <h1>GetBusinessById</h1>
             <Input onChange={(e) => setIdGetBusiness(e.target.value)} type='string' placeholder='ID OF BUSINESS TO GET'></Input>
             <button onClick={getSystem} >get system by id</button>
             {system!=undefined?  <div><>
                 <p>business id:{system._id} </p>
                <p>manager id:{system.admin_id} </p>
                <p>business name:{system.subject}</p>
                <p>description:{system.description} </p>
                <p>owner business name:{system.name} </p>
                <p>phone:{system.phone} </p>
                <p>email:{system.email}</p>
             
                </></div>:<div></div>}
                <button onClick={handleClick}>update system</button>
                <button onClick={handleClick1}>delete system</button>
            </>
        )
}
export default observer(GetSystemById) ;