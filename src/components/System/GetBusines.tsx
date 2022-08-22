import React from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems } from '../../api/system';
import { logout , auth} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

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
      const [user, loading, error] = useAuthState(auth);
    const [system,setSystem] = useState<System[]>([]);

    useEffect(() => {
        getAllSystem();
    }, [])
    useEffect(() => {
        if (loading) {
          return;
        }
        if (!user)  {
          console.log('if  not user');
          navigate('/');   
        }
       }, [user, loading]);
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
      const map = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/map')
      };
        return (
            <>
            <h1>All Businesses</h1>
         <button onClick={handleClick} >get system by id</button>
           <div>{renderList()}</div>
           <button onClick={logout}>Sign out of Firebase</button>
            <button onClick={map}>tomap</button>
            </>
        )
    

}
export default GetSystem;