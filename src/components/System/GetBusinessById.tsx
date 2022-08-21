import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetSystemById=()=>
{
    const navigate = useNavigate();
    
//     //getSystemByManagerId
//     const getSystemByManagerId = async (managerId: string) => {
//     try {
//         const { data } = await axios.get(`http://localhost:3333/system/${managerId}`);
//         return data;
//     }
//     catch (error) {
//         console.log('error-getSystemByManagerId',error);
//     }
// }
 
   

       const handleClick = (event: React.MouseEvent<HTMLElement>) => {
   
            navigate("/updatesystem")
       }
        const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
   
            navigate("/deletesystem")
       }
       


        return (
            <>

           <button onClick={handleClick}>update system</button>
            <button onClick={handleClick1}>delete system</button>
            </>
        )
    

}
export default GetSystemById;