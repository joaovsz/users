import { useContext, useEffect, useState } from "react";
import styles from "./Resultado.module.css";
import { User } from "@/types/User";
import {
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
              <TableCell align="right">Matrícula</TableCell>
              <TableCell align="right">Nome Completo&nbsp;</TableCell>
              <TableCell align="right">Email&nbsp;</TableCell>
              <TableCell align="right">Situação&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.id?(<TableRow
                key={filteredUsers.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="right">{row.department.name}</TableCell> */}
                <TableCell align="right">{filteredUsers.id}</TableCell>
                <TableCell align="right">{filteredUsers.name}</TableCell>
                <TableCell align="right">{filteredUsers.email}</TableCell>
                <TableCell align="right">
                  {filteredUsers.ativo ? "Ativo" : "Inativo"}
                </TableCell>
              </TableRow>):users.map((row) => (
              <TableRow
                key={filteredUsers.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="right">{row.department.name}</TableCell> */}
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">
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
