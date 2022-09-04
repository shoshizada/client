import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { Business } from '../components/System/CreateBusines'
//getAllSystems
export const getAllSystems = async () => {
    try {
        const systems = await axios.get(`http://localhost:3333/system`);
        return systems.data;
    }
    catch (error) {
        console.log('error in getAllSystems', error);
    }
}
//getSystemByManagerId
export const getSystemByManagerId = async (managerId: string) => {
    try {
        const { data } = await axios.get(`http://localhost:3333/system/${managerId}`);
        return data;
    }
    catch (error) {
        console.log('error-getSystemByManagerId', error);
    }
}
//post
export const createSystem = async (system: Business) => {
    try {
        await axios.post('http://localhost:3333/system/', system);

    }
    catch (error) {
        console.log('error-createSystem', error);
    }
}
//put
export const updateSystem = async (systemId: string, updates: Business) => {
    try {
        await axios.put(`http://localhost:3333/system/${systemId}`, updates);
    }
    catch (error) {
        console.log('error - updateSystem', error);
    }
}
//delete
export const deleteSystem = async (systemId: string) => {
    try {
        await axios.delete(`http://localhost:3333/system/${systemId}`);
        alert(`business ${systemId} deleted successfully`)
    }
    catch (error) {
        console.log('error - deleteSystem', error);
        alert(`business ${systemId}failed to deleted successfully`);
    }
}
//mobx
class System {
    systems: System[] = [];
    system: any = null

    constructor() {
        makeAutoObservable(this);
    };

    async getAllSystems() {
        this.systems = await getAllSystems();
    }
    async getSystemByManagerId(managerId: string) {
        this.systems = await getSystemByManagerId(managerId);
    }
    async createSystem(system: Business) {
        this.system = await createSystem(system);
    }
    async updateSystem(systemId: string, updates: Business) {
        this.system = await updateSystem(systemId, updates);
    }
    async deleteSystem(systemId: string) {
        this.system = await deleteSystem(systemId);
    }
}
const system = new System();
export default system;

