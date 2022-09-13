import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { User } from '../components/User/user'

//getAllUsers
export const getAllUsers = async () => {
    try {
        const users = await axios.get<User[]>(`http://localhost:3333/user`);
        return users.data;
    }
    catch (error) {
        console.log('error in getAllUsers', error);
    }
}
//getUserById
export const getUserById = async (id: string) => {

    try {
        const user = await axios.get(`http://localhost:3333/user/${id}`);
    }
    catch (error) {
        console.log('error in getUserById', error);
    }
}

//createUser

export const createUser = async (user: User) => {
    try {
    const res=    await axios.post('http://localhost:3333/user/', user);
return res;
    }
    catch (error) {
        console.log('error-createUser', error);
    }
}

//mobx

class Store {
    users: User[] = [];
    user: User | any = null
    constructor() {
        makeAutoObservable(this);
    };

    async createUser(user: User) {
// console.log("user mobx"+ this.user)
       const res =  await createUser(user)
       this.user = res;
         console.log("after create user"+ this.user)
        
    }
    async getUserById(id: string) {
        this.user = await getUserById(id);
    }
}

const userStore = new Store();
export default userStore;

