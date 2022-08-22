export type User = {
    _id?: string,
    uid?: string,
    role: Role;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }
  export enum Role{
      admin,
      manager,
      customer,
  }