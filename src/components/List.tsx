import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

interface User{  
    firstName: string
      lastName: string
    }

const  List=() =>{
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        const res = await axios.get<User[]>(`http://localhost:3333/user`);
        console.log(res);
        setUsers(res.data);
    }
    const renderList = () : JSX.Element[]=>
    {
        return users.map((user)=>{
            return(<>
                <p>{user.firstName}</p>
            <p>{user.lastName} </p></>
        )      
        })}
        return (
            <>
           <div>{renderList()}</div>
            </>
        )
    
}
export default List;

