import axios from 'axios';
import {User} from '../components/User/user'

//getAllUsers
export const getAllUsers = async () => {
    try {
        const users = await axios.get(`http://localhost:3333/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}
//getUserById
export const getUserById= async(id: string)=>{

    try{
        const user= await axios.get(`http://localhost:3333/user/${id}`);
    }
    catch(error){
        console.log('error in getUserById', error);
    }
}

//createUser

export const createUser  = async (user: User) => {
    try {
        await axios.post('http://localhost:3333/user/', user);

    }
    catch (error) {
        console.log('error-createUser', error);
    }
}


