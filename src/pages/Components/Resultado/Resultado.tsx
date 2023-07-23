import { useEffect, useState } from "react";
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

const initialValue = [{} as User];
const Resultado = () => {
  const [users, setUsers] = useState<User[]>(initialValue);
  const [aux, setAux] = useState(false);
  useEffect(() => {
    // getUsers()
  }, [aux]);

  // async function getUsers() {
  //         await fetch('http://localhost:8080/users')
  //             .then((async response => await response.json())).then( async response=>
  //             {
  //                 const usersR = await response
  //                 setUsers(usersR)
  //                 console.log(users)
  //                }

  //     )

  //     }

  return (
    <div className={styles.container}>
      {/* <button onClick={()=>setAux(!aux)}>At</button> */}
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
            {users.map((row) => (
              <TableRow
                key={row.id}
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
