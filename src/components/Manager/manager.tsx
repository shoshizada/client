import { Role } from "../User/user";

export interface Manager  {
    user_id: string;
    system_id: string;
    active: boolean;
    display_name: string;
    role: Role;
    invitation_sent: boolean
  }