import { createContext, useEffect, useState } from "react";
import {initialValue, userContext} from '../types/userContext'
import { Department, User, UserFiltered } from "@/types/User";

export const UsersContext = createContext<userContext>(initialValue)

export function UserProvider(props: any) {
  const [users, setUsers] = useState<UserFiltered[]>(initialValue.users)
  const [filteredUsers, setFilteredUsers] = useState<UserFiltered>(initialValue.filteredUsers)
  const [id, setId] = useState(initialValue.id)
  const [userForm, setUserForm] = useState<User>(initialValue.userForm);
  
 
    useEffect(() => {
        getUsers()
    }, [])
  
    function handleChangeForm(event: { target: { name: string; value: string } }) {
      const { name, value } = event.target;
      
      setUserForm((prevUser) => ({ ...prevUser, [name]: value }));
    
  }

    async function getUsers() {
    await fetch('http://localhost:8080/users')
      .then((async response => await response.json())).then(async (response: User[]) => {
      
        const userF: User[] =  response
        const userFiltered = userF.map((response:User)=>({...response, department: response.department?response.department.name: null}))
          setUsers(userFiltered)
          console.log(userF)
        
        
      },
      )
  }
  function cadastraUsuario() {
   fetch("http://localhost:8080/users",
       {
         headers : { 'Content-type' : 'application/json', Accept : 'application/json'},
         method: 'POST',
        body: JSON.stringify({
      "ativo": 1,
      department: {id: 1, name: userForm.department},
      email:userForm.email,
      name: userForm.name,
        }),
       })
       
     
  }


   function handleId(e: string) {
    setId(e);
  }
  

  async function getUserById(id: string):Promise<void> {
    fetch(`http://localhost:8080/users/${id}`)
      .then((response) => response.json())
      .then((response) => {
   
        setFilteredUsers({...response, department: response.department?response.department.name: null})
      });
    console.log(users)
   
  }

    return (<UsersContext.Provider value={{users, handleChangeForm, cadastraUsuario, userForm, filteredUsers, id, handleId, getUserById, getUsers}}> {props.children} </UsersContext.Provider>)
}