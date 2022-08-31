
import {  Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getAllSystems } from '../../api/system';
import { logout , auth} from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
    const bull = (
     <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
     >
    </Box>
    );

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
        const map = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/map')
      };
               
                
               
    const renderList = () : JSX.Element[]=>
    {
        let i=0;
        return system.map((syste)=>{
            return(
             <React.Fragment>
          <CardContent>
      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
      <p>topic: {syste.topic}</p>
       <p>id: {syste._id} </p>
      </Typography>
      <Typography variant="h5" component="div">
              <p>objectName: {syste.objectName} </p>
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
         <p>business :{i++}</p>
      </Typography>
      <Typography variant="body2">
 
                <p>owner: {syste.owner}</p>
                
                <p>description: {syste.description} </p>
                <p>phone: {syste.phone} </p>
                <p>email: {syste.email}</p>
                <p>urlName: {syste.urlName} </p>
                 
        <br />
        {'"a benevolent smile"'}
      </Typography>
       </CardContent>
        <CardActions>
      <Button size="small"><button onClick={map}>tomap</button></Button>
      </CardActions>
       </React.Fragment>
              
                
        )      
        })}

      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/getsystembyid')
      };
       const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
       navigate("/createsystem")
      };
 
        return (
            <>
            <h1>All Businesses</h1>
         <button onClick={handleClick} >get system by id</button>
          <button onClick={handleClick1} >add business</button>
           {/* <div>{renderList()}</div> */}
           <button onClick={logout}>Sign out of Firebase</button>
           
          <Box sx={{ minWidth: 275 }}>
           <Card variant="outlined">{renderList()}</Card>
          </Box>
            </>

        )
    

}
export default GetSystem;