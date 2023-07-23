import React, { useState } from "react";
import styles from "./Input.module.css";
import { InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const Input = () => {
  const [id, setId] = useState("");

  async function getUsers(id: string) {
    fetch(`http://localhost:8080/users/${id}`)
      .then((response) => response.json())
      .then((response) => console.log(response));
  }

  function handleId(e: string) {
    console.log(e);
    setId(e);
  }

  return (
    <div className={styles.container}>
      <h3>Colaboradores</h3>
      <section className={styles.containerInput}>
        <form className={styles.form}>
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
            onClick={() => getUsers(id)}
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
      </section>
    </div>
  );
};

export default Input;
