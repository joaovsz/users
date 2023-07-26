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
  // const [idPassed, setIdPassed] = useEffect(initialValue.)
 const [open, setOpen] = useState(initialValue.open);
  useEffect(() => {
    getUsers()
  }, [open])
  

  useEffect(() => { }, [])
  
  function handleChangeForm(event: { target: { name: string; value: string } }) {
    const { name, value } = event.target;
    setUserForm((prevUser) => ({ ...prevUser, [name]: value }));
  }


  async function getUsers() {
    await fetch('http://localhost:8080/users')
      .then((async response => await response.json())).then(async (response: User[]) => {

        const userF: User[] = response
        const userFiltered = userF.map((response: User) => ({ ...response, department: response.department ? response.department.name : null }))
        setUsers(userFiltered)
        console.log(users)
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

        setFilteredUsers({ ...response, department: response.department ? response.department.name : null })
      });
    

  }
  const handleClickOpen = (id:string, name:string) => {
    setOpen(true);
    setId(id)
    const filteredId = users.filter((prev: UserFiltered) => prev.id == id)
    setName(name)
    console.log(name)
  
  };

  const handleClose = () => {
    setOpen(false);
  };


  
  async function deleteUser(name: string) {

    
    await fetch(`http://localhost:8080/users/delete/${id}`, {
      method: "DELETE"
    })
      .then(response => {
        response.json()
        handleClose()
      })
      
  }

  return (<UsersContext.Provider value={{ users,open, name,handleChangeForm, handleClickOpen, handleClose, cadastraUsuario, deleteUser, userForm, filteredUsers, id, handleId, getUserById, getUsers }}> {props.children} </UsersContext.Provider>)
}