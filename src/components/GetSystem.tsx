import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";

    interface System{  
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
  
    const [system,setSystem] = useState<System[]>([]);

    useEffect(() => {
        getAllSystem();
    }, [])

    const getAllSystem = async () => {
        const res = await axios.get<System[]>(`http://localhost:3333/system`);
        console.log(res);
        setSystem(res.data);
    }
    const renderList = () : JSX.Element[]=>
    {
        return system.map((syste)=>{
            return(<>
                <p>system</p>
                <p>{syste.topic}</p>
                <p>{syste.objectName} </p>
                <p>{syste.owner}</p>
                <p>{syste.description} </p>
                <p>{syste.phone} </p>
                <p>{syste.email}</p>
                <p>{syste.urlName} </p>
                </>
        )      
        })}
        return (
            <>
           <div>{renderList()}</div>
            </>
        )
    

}
export default GetSystem;