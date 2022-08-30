import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems, getSystemByManagerId } from '../../api/system';
    interface System{
        _id: string
        topic: string
        objectName: string
        owner: string
        description: string
        phone: string
        email: string
        urlName:string
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
                <p>id: {system._id} </p>
                <p>topic: {system.topic}</p>
                <p>objectName: {system.objectName} </p>
                <p>owner: {system.owner}</p>
                <p>description: {system.description} </p>
                <p>phone: {system.phone} </p>
                <p>email: {system.email}</p>
                <p>urlName: {system.urlName} </p>
                </></div>:<div></div>}
                <button onClick={handleClick}>update system</button>
                <button onClick={handleClick1}>delete system</button>
            </>
        )
}
export default GetSystemById;