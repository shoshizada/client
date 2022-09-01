import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditBranches() {
          
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

    return(
        
     <div>
        <h1>Edit branches</h1>
       
       </div>
    );
}