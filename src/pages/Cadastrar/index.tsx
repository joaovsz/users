import React from "react";
import { Header } from "../Components/Header/Header";
import { Navbar } from "../Components/NavBar/Navbar";
import FormCadastro from "../Components/FormCadastro/FormCadastro";

const index = () => {
  return (
    <>
      <Header />
      <Navbar typePage={"Cadastrar"} />
      <FormCadastro />
    </>
  );
};

export default index;
