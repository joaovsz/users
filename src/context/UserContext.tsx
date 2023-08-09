import { createContext, useEffect, useState } from "react";
import { initialValue, userContext } from '../types/userContext'
import { Department, User, UserFiltered } from "@/types/User";

export const UsersContext = createContext<userContext>(initialValue)

export function UserProvider(props: any) {
  const [users, setUsers] = useState<UserFiltered[]>(initialValue.users)
  const [filteredUsers, setFilteredUsers] = useState<UserFiltered>(initialValue.filteredUsers)
  const [id, setId] = useState(initialValue.id)
  const [name, setName] = useState(initialValue.name)
  const [userForm, setUserForm] = useState<User>(initialValue.userForm);
  const [open, setOpen] = useState(initialValue.open);
  useEffect(() => {
    getUsers()
  }, [open])


  

  function handleChangeForm(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;
    setUserForm((prevUser) => ({ ...prevUser, [name]: value }));
    setFilteredUsers((prevUser) => ({ ...prevUser, [name]: value }))
   console.log(filteredUsers.department)
  }


  async function getUsers() {
    await fetch('http://localhost:8080/users')
      .then((async response => await response.json())).then((response: User[]) => {
         const userF: User[] = response;
        const userFiltered =  userF.map((response: User) => ({ ...response, department: response.department.id ? response.department.name : null }))
        setUsers(userFiltered)
    
      },
      )
  }
  function cadastraUsuario() {
    fetch("http://localhost:8080/users",
      {
        headers: { 'Content-type': 'application/json', Accept: 'application/json' },
        method: 'POST',
        body: JSON.stringify({
          "ativo": 1,
          department: { id: 1, name: userForm.department },
          email: userForm.email,
          name: userForm.name,
        }),
      })
    setUserForm(initialValue.userForm)

  }


  function handleId(e: string) {
    setId(e);
  }


  async function getUserById(id: string): Promise<void> {
    fetch(`http://localhost:8080/users/${id}`)
      .then((response) => response.json())
      .then((response) => {
        setFilteredUsers({ ...response, department: response.department ? response.department.id : null })
       
      });


  }
  const handleClickOpen = (id: string, name: string) => {
    setOpen(true);
    setId(id)
    setName(name)
    console.log(name)

  };

  async function handleClose() {
    setOpen(false);
  };

  const updateInfo = (id: string) => {
    fetch(`http://localhost:8080/users/update/${id}`, {
      headers: { 'Content-type': 'application/json', Accept: 'application/json' },
      method: "PUT",
      body: JSON.stringify({
        "email": userForm.email ,
        "name": userForm.name,
        "ativo": userForm.ativo,
        "department": {
          id: filteredUsers.department,
          name: filteredUsers.department=="1"?"Gestão":"Informática" }
      })
    }
    )
    setUserForm({} as User)
    setFilteredUsers({} as UserFiltered)
  }


  async function deleteUser(name: string) {


    await fetch(`http://localhost:8080/users/delete/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        response.json()
        handleClose()
      })

  }

  return (<UsersContext.Provider value={{ updateInfo,users, open, name, handleChangeForm, handleClickOpen, handleClose, cadastraUsuario, deleteUser, userForm, filteredUsers, id, handleId, getUserById, getUsers }}> {props.children} </UsersContext.Provider>)
}