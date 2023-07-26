import React from 'react'
import { Header } from '../Components/Header/Header'
import { Navbar } from '../Components/NavBar/Navbar'
import FormCadastro from '../Components/FormCadastro/FormCadastro'
import styles from "./Atualizar.module.css"
import Input from '../Components/Input/Input'
const index = () => {
  return (
    <div> <>
      <Header />
          <Navbar typePage={"Atualização Cadastral"}  />
      <Input />
    </></div>
  )
}

export default index