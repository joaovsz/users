import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
export const Navbar = (props: { typePage: string }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <li
          className={
            props.typePage == "Pesquisar" ? styles.pesquisar : styles.list
          }
        >
          <Link href="/">Pesquisar</Link>
        </li>
        <li
          className={
            props.typePage == "Cadastrar" ? styles.cadastrar : styles.list
          }
        >
          <Link href="/Cadastrar">Cadastrar</Link>
        </li>
        <li
          className={
            props.typePage == "Atualização Cadastral" ? styles.AtualizaçãoCadastral : styles.list
          }
        >
          <Link href="/Atualizar">Atualização Cadastral</Link>
        </li>
      </ul>
    </div>
  );
};
