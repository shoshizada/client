import axios from "axios";
import { Manager } from "../components/Manager/manager";

//post
export const createManager = async (manager: Manager) => {
    try {
        await axios.post('http://localhost:3333/manager/', manager);

    }
    catch (error) {
        console.log('error-createManager', error);
    }
}