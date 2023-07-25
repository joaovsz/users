import { User, UserFiltered } from "./User";

export type userContext = {
    users: UserFiltered[]
    filteredUsers: UserFiltered
    id: string
    open: boolean
    userForm: User
    getUsers: () => void;
    handleClickOpen:()=>void
    handleClose: () => void
    deleteUser:(key:string)=> void
    handleId: (e: string) => void;
    getUserById: (id: string) => void;
    cadastraUsuario: () => void
    handleChangeForm: (event: { target: { name: string; value: any } }) => void
    
}

export const initialValue ={
    users: [{} as UserFiltered],
    filteredUsers: {} as UserFiltered,
    id: '',
    open: false,
    userForm: {name:'', email: '', department:{id:'', name:''} } as User,
    getUsers: () => { },
    handleId: () => { },
    getUserById: () => { },
    deleteUser: () => { },
    handleClickOpen:()=>{},
    handleClose:()=>{},
    handleChangeForm:() => {},
    cadastraUsuario:() => {}
}