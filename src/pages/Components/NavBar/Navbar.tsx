import React from 'react'
import styles from './Navbar.module.css'
export const Navbar = () => {
  return (
      <div className={styles.container}>
          <ul className={styles.ul}>
              <li className={styles.lista}>
                  <a>
                  Cadastrar
              </a>
              </li>
              <li className={styles.lista}><a>Pesquisar</a></li>
          </ul>
      </div>
  )
}
