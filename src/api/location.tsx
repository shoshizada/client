import axios from 'axios';
import {Location} from '../components/Location/AddLocation'
//post
export const createLocation = async (newLocation:Location) => {
    console.log(newLocation);
    try {
         await axios.post('http://localhost:3333/location/',newLocation);
    }
    catch (error) {
        console.log('error-createSystem',error);
    }
}
//put
export const updateLocation= async (locationId:string, updateLocation:Location) => {
    try {
         await axios.put(`http://localhost:3333/location/${locationId}`, updateLocation);
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