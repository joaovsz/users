import Image from 'next/image'
import React from 'react'
import styles from "./Header.module.css"

export const Header = () => {
  return (
      <header className={styles.header}>
          <Image src={"./logoJvsz.svg"} className={styles.logo} alt='joaovsz Logo' width={100} height={100}/>
    </header>
  )
}
