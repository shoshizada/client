import axios from 'axios';
import {Location} from '../components/Location/AddLocation'
import {Request} from '../components/Reqest/CreateReqest'
//post
export const createRequest = async (newRequest:Request) => {
    console.log();
    try {
         await axios.post('http://localhost:3333/request/',newRequest);
    }
    catch (error) {
        console.log('error-createSystem',error);
    }
}
//getRequestBySystemId
export const getReqestBySystemId = (systemId: string) => {

    try {
        let data;
        axios.get('http://localhost:3333/location').then((res)=>{data=res.data})
   
        // const { data } = await axios.get(`http://localhost:3333/request/${systemId}`);
        console.log(data);
        return data;
    }
    catch (error) {
        alert('error-getSystemByManagerId');
    }
}
//put
export const updateLocation= async (systemId:string, updateLocation:Location) => {
    try {
         await axios.put(`http://localhost:3333/request/${systemId}`, updateLocation);
    }
    catch (error) {
        console.log('error - updateSystem',error);
    }
}
//delete
export const deleteLocation= async (locationId:string) => {
    try {
        await axios.delete(`http://localhost:3333/location/${locationId}`);
        alert(`business ${locationId} deleted successfully`)
    }
    catch (error) {
        console.log('error - deleteSystem', error);
        alert(`business ${locationId}failed to deleted successfully`);
    }
}