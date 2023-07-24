import { createContext, useEffect, useState } from "react";
import {initialValue, userContext} from '../types/userContext'
import { User } from "@/types/User";

export const UsersContext = createContext<userContext>(initialValue)

export function UserProvider(props: any) {
  const [users, setUsers] = useState<User[]>(initialValue.users)
  const [filteredUsers, setFilteredUsers] = useState(initialValue.filteredUsers)
  const [id, setId] = useState(initialValue.id)
    useEffect(() => {
        getUsers()
    }, [])
    
    async function getUsers() {
    await fetch('http://localhost:8080/users')
      .then((async response => await response.json())).then(async response => {
        const usersR = await response
        // const userFiltered = usersR.filter((user: User) => user.id == props.user)
        setUsers(usersR)
       
      },
      )
        
    }
   function handleId(e: string) {
    setId(e);
   }
  async function getUserById(id: string):Promise<void> {
    fetch(`http://localhost:8080/users/${id}`)
      .then((response) => response.json())
      .then((response) =>setFilteredUsers(response));
   
  }

    return (<UsersContext.Provider value={{users, filteredUsers, id, handleId, getUserById, getUsers}}> {props.children} </UsersContext.Provider>)
}