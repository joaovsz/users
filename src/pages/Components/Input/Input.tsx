import { UsersContext } from "@/context/UserContext";
import { AccountCircle } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useContext } from "react";
import styles from "./Input.module.css";


const Input = (props:{helper:string}) => {
  const { getUserById, handleId, id } = useContext(UsersContext)
 

  return (
    <div className={styles.container}>
      <h3>Colaboradores</h3>
      <section className={styles.containerInput}>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault()
          getUserById(id)
        } }>
          <TextField
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleId(event.target.value)
            }
            value={id}
            type="number"
            size={"small"}
            id="outlined-basic"
            label="Pesquisar"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <IconButton
            type="submit"
           
            sx={{
              marginLeft: ".8rem",
              padding: "0 .2rem",
              borderRadius: ".5rem",
              height: "100%",
              backgroundColor: "#000000",
              color: "white",
            }}
          >
            <SearchIcon
              sx={{
                padding: "0",
              }}
            />
          </IconButton>
        </form>
        <span className={styles.helper }>{props.helper}</span>
      </section>
    
    </div>
  );
};

export default Input;
