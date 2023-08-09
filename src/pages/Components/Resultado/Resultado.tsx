import { UserFiltered } from "@/types/User";
import SaveIcon from '@mui/icons-material/Save';
import {
  IconButton,
  MenuItem, Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import { useContext, useEffect } from "react";
import styles from "./Resultado.module.css";

import { UsersContext } from "@/context/UserContext";
import AlertDialog from "../Dialog/Dialog";


const Resultado = (props: { page: string }) => {
  const { filteredUsers, users, userForm, handleChangeForm,updateInfo } = useContext(UsersContext)
  useEffect(() => {
    console.log(filteredUsers)
  }, [])
 
  return (

    <div className={styles.container}>
      {props.page == "Pesquisa" ?
        (
          <>
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
                  {filteredUsers.id ? (<TableRow
                    key={filteredUsers.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{filteredUsers.department=="1"?"Gestão":"Informática"}</TableCell>
                    <TableCell align="center">{filteredUsers.id}</TableCell>
                    <TableCell align="center">{filteredUsers.name}</TableCell>
                    <TableCell align="center">{filteredUsers.email}</TableCell>
                    <TableCell align="center">
                      {filteredUsers.ativo ? "Ativo" : "Inativo"}
                    </TableCell>
                    <TableCell align="center">

                      <AlertDialog name={filteredUsers.name} id={filteredUsers.id} />

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
                      <TableCell align="center">
                        <AlertDialog name={row.name} id={row.id} />
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>) : (
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
                  <TableCell align="center">Matrícula</TableCell>
                  <TableCell align="center">Departamento</TableCell>
                  <TableCell align="center">Nome Completo&nbsp;</TableCell>
                  <TableCell align="center">Email&nbsp;</TableCell>
                  <TableCell align="center">Situação&nbsp;</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredUsers.id == undefined ? <p>Insira a matricula</p> :
                  (<>
                    <TableRow
                      key={filteredUsers.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{filteredUsers.id}</TableCell>
                      <TableCell align="center">{filteredUsers.department}</TableCell>
                      <TableCell align="center">{filteredUsers.name}</TableCell>
                      <TableCell align="center">{filteredUsers.email}</TableCell>
                      <TableCell align="center">
                        {filteredUsers.ativo ? "Ativo" : "Inativo"}
                      </TableCell>
                      <TableCell align="center">
                        <AlertDialog name={filteredUsers.name} id={filteredUsers.id} />
                      </TableCell>

                    </TableRow>
                    
                     </>
                  )}
                    <TableRow
                      key={filteredUsers.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >  <TableCell align="center">
                        {filteredUsers.id}
                      </TableCell>
                     
                      <TableCell align="center">

                        <Select
                          size="small"
                          sx={{ width: "100%" }}
                          labelId="demo-select-small-label"
                      id="demo-select"
                      name="department"
                          value={filteredUsers.department == "1" ? 1 : 2}
                          label="Status"
                          onChange={handleChangeForm}
                    >
                      
                          <MenuItem value={1}>Gestão</MenuItem>
                          <MenuItem value={2}>Informática</MenuItem>

                        </Select>

                      </TableCell>

                      <TableCell align="center">
                        <TextField
                          onChange={handleChangeForm}
            value={userForm.name}
            name="name"
                          
                          type="string"
                          size={"small"}
                          id="outlined-basic"
                          variant="outlined" />
                      </TableCell>
                      <TableCell align="center">
                        <TextField
                          onChange={handleChangeForm}
                          value={userForm.email}
                          name="email"
                          type="email"
                          size={"small"}
                          id="outlined-basic"
                          variant="outlined" />

                      </TableCell>
                      <TableCell align="center">

                        <Select
                          size="small"
                          sx={{ width: "100%" }}
                          labelId="demo-select-small-label"
                      id="demo-select"
                          name="ativo"
                          value={filteredUsers.ativo ? 1 : 0}
                          label="Status"
                          onChange={handleChangeForm}
                        >
                          <MenuItem value={1}>Ativo</MenuItem>
                          <MenuItem value={0}>Inativo</MenuItem>

                        </Select>
                      </TableCell>


                      <TableCell align="center">
                        <IconButton>
                      <SaveIcon onClick={ ()=>updateInfo(filteredUsers.id)} />
                        </IconButton>

                      </TableCell>
                      <TableCell align="center">

                      </TableCell>
                    </TableRow> 

              </TableBody>
            </Table>
          </TableContainer>)}

    </div>

  );
};

export default Resultado;
