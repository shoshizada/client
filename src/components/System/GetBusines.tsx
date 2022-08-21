import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems } from '../../api/system';

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

const GetSystem=()=>
{
      const navigate = useNavigate();
  
    const [system,setSystem] = useState<System[]>([]);

    useEffect(() => {
        getAllSystem();
    }, [])

    const getAllSystem = async () => {
         const res =getAllSystems();
        console.log(res);
        setSystem(await res);
    }
    const renderList = () : JSX.Element[]=>
    {
        let i=0;
        return system.map((syste)=>{
            return(<>
                <p>business :{i++}</p>
                <p>id: {syste._id} </p>
                <p>topic: {syste.topic}</p>
                <p>objectName: {syste.objectName} </p>
                <p>owner: {syste.owner}</p>
                <p>description: {syste.description} </p>
                <p>phone: {syste.phone} </p>
                <p>email: {syste.email}</p>
                <p>urlName: {syste.urlName} </p>
                </>
        )      
        })}

      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/getsystembyid')
      };
        return (
            <>
            <h1>All Businesses</h1>
             <img src="https://www.geektime.co.il/waze-starts-shipping-beta-testers-dark-mode-for-the-entire-ui/" alt="water sport" />
            <img src={"client\src\css\image (62).png"}/>
         <button onClick={handleClick} >get system by id</button>
           <div>{renderList()}</div>
       
            </>
        )
    

}
export default GetSystem;