import { User } from "./User";

export type userContext = {
    users: User[]
    filteredUsers: User
    id: string
    getUsers: () => void;
    handleId: (e: string) => void;
    getUserById: (id:string) => void;
    
}

export const initialValue ={
    users: [{} as User],
    filteredUsers: {} as User,
    id: '',
    getUsers: () => { },
    handleId: () => { },
    getUserById: () => {}
    
}