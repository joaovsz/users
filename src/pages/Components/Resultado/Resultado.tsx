import { useContext, useEffect, useState } from "react";
import styles from "./Resultado.module.css";
import { Department, User, UserFiltered } from "@/types/User";
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { UsersContext } from "@/context/UserContext";


const Resultado = () => {
const {users} = useContext(UsersContext)
const {filteredUsers} = useContext(UsersContext)      
  return (
  
     <div className={styles.container}>
    
      <TableContainer
        sx={{ height: "25rem", overflowY: "scroll" }}
        component={Paper}
      >
        <Table
          sx={{ minWidth: 650, height: 150, overflowY: "scroll" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">Departamento</TableCell>
              <TableCell align="center">Matrícula</TableCell>
              <TableCell align="center">Nome Completo&nbsp;</TableCell>
              <TableCell align="center">Email&nbsp;</TableCell>
              <TableCell align="center">Situação&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.id?(<TableRow
                key={filteredUsers.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{filteredUsers.department}</TableCell>
                <TableCell align="center">{filteredUsers.id}</TableCell>
                <TableCell align="center">{filteredUsers.name}</TableCell>
                <TableCell align="center">{filteredUsers.email}</TableCell>
                <TableCell align="center">
                  {filteredUsers.ativo ? "Ativo" : "Inativo"}
                </TableCell>
            </TableRow>) : users.map((row: UserFiltered) => (               
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.department}</TableCell>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">
                  {row.ativo ? "Ativo" : "Inativo"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
 
  );
};

export default Resultado;
