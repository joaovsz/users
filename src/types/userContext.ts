import { User, UserFiltered } from "./User";

export type userContext = {
    users: UserFiltered[]
    filteredUsers: UserFiltered
    id: string
    userForm: User
    getUsers: () => void;
    handleId: (e: string) => void;
    getUserById: (id: string) => void;
    cadastraUsuario: () => void
    handleChangeForm: (event: { target: { name: string; value: any } }) => void
    
}

export const initialValue ={
    users: [{} as UserFiltered],
    filteredUsers: {} as UserFiltered,
    id: '',
    userForm: {name:'', email: '', department:{id:0, name:''} } as User,
    getUsers: () => { },
    handleId: () => { },
    getUserById: () => {},
    handleChangeForm:() => {},
    cadastraUsuario:() => {}
}