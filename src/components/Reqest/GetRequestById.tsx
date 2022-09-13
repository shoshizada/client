import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems, getSystemByManagerId } from '../../api/system';
import { observer } from 'mobx-react';
import { getReqestBySystemId } from '../../api/request';
  
export interface Request {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    system_id:string;
    display_name: string
    status: string;
    notes: string;
}

const GetRequestById=()=>
{
      const navigate = useNavigate();
         const [idGetRequest, setIdGetRequest] = useState("");
    const [Request,setRequest] = useState<Request>();


    const getRequest = async (event: React.MouseEvent<HTMLElement>)=> {
        console.log(idGetRequest)
        const res = getReqestBySystemId(idGetRequest);
        console.log(res);
        setRequest(await res);
        console.log(Request);
        }
   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/updatesystem');
      };
   const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/deletesystem');
      };

        return (
            <>
            <h1>GetRequestById</h1>
             <Input onChange={(e) => setIdGetRequest(e.target.value)} type='string' placeholder='ID OF BUSINESS TO GET'></Input>
             <button onClick={getRequest} >get system by id</button>
             {Request!=undefined?  <div><>
                <p>firstName:{Request.firstName} </p>
                <p>lastName:{Request.lastName} </p>
                <p>email:{Request.email}</p>
                <p>phone:{Request.phone} </p>
                <p>system_id:{Request.system_id} </p>
                <p>display_name:{Request.display_name}</p> 
                <p>status:{Request.status}</p>
                <p>notes:{Request.notes}</p>
             
                </></div>:<div></div>}
                {/* <button onClick={handleClick}>update system</button>
                <button onClick={handleClick1}>delete system</button> */}
            </>
        )
}
export default GetRequestById ;