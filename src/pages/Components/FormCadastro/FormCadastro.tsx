import { AccountCircle, Email, Send } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styles from "./FormCadastro.module.css";
import { useState } from "react";
import { User } from "@/types/User";
const FormCadastro = () => {
  const [user, setUser] = useState<User>({} as User);
  function handleChange(event: { target: { name: string; value: any } }) {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    console.log(user);
  }
  function cadastraUsuario() {
    fetch("http://localhost:8080/users", {});
  }
  return (
    <>
      <div className={styles.container}>
        <h3>Cadastrar Colaborador</h3>
        <form className={styles.form}>
          <TextField
            onChange={handleChange}
            value={user.name}
            name="nome"
            size={"small"}
            id="outlined-basic"
            label="Nome Completo"
            placeholder="Nome Completo"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            onChange={handleChange}
            value={user.email}
            name="email"
            type="email"
            size={"small"}
            id="outlined-basic"
            label="Email"
            placeholder="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <FormControl required sx={{ m: 1, minWidth: 160 }} size={"small"}>
            <InputLabel id="demo-simple-select-required-label">
              Departamento
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={user?.department}
              label="Departamento *"
              onChange={handleChange}
              name="department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Gestão</MenuItem>
              <MenuItem value={2}>Informática</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            sx={{
              borderRadius: ".3rem",
              fontSize: ".8rem",
              fontWeight: "bold",
              color: "white",
              height: "100%",
              background: "black",
              "&:hover": { background: "#008000" },
            }}
          >
            Cadastrar
            <Send sx={{ marginLeft: ".3rem" }} />
          </IconButton>
        </form>
      </div>
    </>
  );
};

export default FormCadastro;