import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

export default function AdminBar() {
    const navigate = useNavigate();

    const addlocation = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/createlocation')
      };

    const updatelocation = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/updatelocation')
      };

    const deletelocation = (event: React.MouseEvent<HTMLElement>) => {
       navigate('/deletelocation')
      };
  return (
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
            Admin
          </Typography>
          <Button color="inherit" onClick={() => navigate(`/edit`)}>Edit branches </Button>
          <Button color="inherit" onClick={addlocation}>addlocation </Button>|
          <Button color="inherit" onClick={updatelocation}>updatelocation </Button>|
          <Button color="inherit" onClick={deletelocation}>deletelocation </Button>|
        </Toolbar>
      </AppBar>
    </Box>
  );
}