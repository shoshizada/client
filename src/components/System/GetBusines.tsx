
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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Navigate } from "react-router-dom";
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
             <body>
            <Card variant="outlined" >
            <React.Fragment>
            <CardContent>
            <Typography variant="h5" component="div">
            <p className="p1 text-right">business name: {syste.subject}</p>
          
            be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ fontSize: 15 }} color="green" gutterBottom>
            <p>descripition: {syste.description} </p>
            <p>business id:{syste._id} </p>
            <p>business owner name: {syste.name}</p>
            <p>manager id: {syste.admin_id} </p>
           </Typography>
           <Typography sx={{ mb: 1.5 }} color="green">
           </Typography>
            <Typography variant="body2">
                <p>phone: {syste.phone} </p>
                <p>email: {syste.email}</p>
       
            <br />
        {'"a benevolent smile"'}
         </Typography>
         </CardContent>
        <CardActions>
        <Button size="small"><button onClick={map}>tomap</button></Button>
        </CardActions>
         </React.Fragment>
              </Card>   
                </body>
                )      
        })}

      const handleClick = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/getsystembyid')
      };
       const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
       navigate("/createsystem")
      };

      const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
       navigate("/admin")
      };

        return (
          <body>
              <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Businesses
          </Typography>
          <Button color="inherit" onClick={handleClick}>get business by id</Button>|
          <Button color="inherit" onClick={handleClick1}>add business </Button>|
          <Button color="inherit" onClick={handleClick2}>to admin</Button>|
          <Button color="inherit" onClick={logout}>Log out</Button>|
        </Toolbar>
      </AppBar>
    </Box>
            <>
     
          <Box sx={{ height:'100%',width:'100%',alignItems:'right',justifyContent:{xs:'6',md:'start'}}}>
         {renderList()}
          </Box>
            </>
</body>
        )
    

}
export default observer(GetSystem) ;