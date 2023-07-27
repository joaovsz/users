import { User, UserFiltered } from "./User";

export type userContext = {
    users: UserFiltered[]
    filteredUsers: UserFiltered
    id: string
    name: string
    open: boolean
    userForm: User
    getUsers: () => void;
    handleClickOpen:(id:string, name:string )=>void
    handleClose: () => void
    deleteUser:(id:string)=> void
    handleId: (e: string) => void;
    getUserById: (id: string) => void
    cadastraUsuario: () => void
    updateInfo:(id:string)=> void
    handleChangeForm: (event: { target: { name: string; value: any } }) => void
    
}

export const initialValue ={
    users: [{} as UserFiltered],
    filteredUsers: {} as UserFiltered,
    id: '',
    name:'',
    open: false,
    userForm: {name:'', email: '', department:{id:'', name:''} } as User,
    getUsers: () => { },
    updateInfo:()=>{},
    handleId: () => { },
    getUserById: () => { },
    deleteUser: () => { },
    handleClickOpen:()=>{},
    handleClose:()=>{},
    handleChangeForm:() => {},
    cadastraUsuario:() => {}
}