import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Manager } from "../components/Manager/manager";

//post
export const createManager = async (manager: Manager) => {
    try {
      const res=  await axios.post ('http://localhost:3333/manager/', manager);
      return res;

    }
    catch (error) {
        console.log('error-createManager', error);
    }
}

//mobx

class Store {
    managers: Manager[] = [];
    manager: Manager | any = null
    constructor() {
        makeAutoObservable(this);
    };
    async createManager(manager: Manager){
       
        const res = await createManager(manager);
        this.manager = manager;
        return res;
    }
}

const manager = new Store();
export default manager;