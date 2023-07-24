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
import { UsersContext } from "@/context/UserContext";
import { useContext } from "react";
const FormCadastro = () => {
  const { userForm, cadastraUsuario, handleChangeForm } = useContext(UsersContext)

  return (
    <>
      <div className={styles.container}>
        <h3>Cadastrar Colaborador</h3>
        <form className={styles.form}>
          <TextField
            required
            onChange={handleChangeForm}
            value={userForm.name}
            name="name"
            size={"small"}
            id="outlined-controlled"
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
            onChange={handleChangeForm}
            value={userForm.email}
            required
            name="email"
            type="email"
            size={"small"}
            id="outlined-controlled"
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
              value={userForm?.department}
              label="Departamento *"
              onChange={handleChangeForm}
              name="department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Gestão</MenuItem>
              <MenuItem value={2}>Informática</MenuItem>
            </Select>
          </FormControl>
          {userForm.name.length < 2 || userForm.email.length < 11 ? (<IconButton
            disabled
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
          </IconButton>) : (<IconButton
            onClick={() => cadastraUsuario()}
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
          </IconButton>)}

        </form>
      </div>
    </>
  );
};

export default FormCadastro;
