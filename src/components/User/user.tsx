
export interface User  {
    firebase_uid: string;
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