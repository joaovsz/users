import React from 'react'
import { Header } from '../Components/Header/Header'
import { Navbar } from '../Components/NavBar/Navbar'
import FormCadastro from '../Components/FormCadastro/FormCadastro'
import styles from "./Atualizar.module.css"
import Input from '../Components/Input/Input'
import Resultado from '../Components/Resultado/Resultado'
const index = () => {
  return (
    <div> <>
      <Header />
          <Navbar typePage={"Atualização Cadastral"}  />
          <Input helper={"Digite o número da matrícula do colaborador a ser atualizado."}/>
          <Resultado/>
    </></div>
  )
}

export default index