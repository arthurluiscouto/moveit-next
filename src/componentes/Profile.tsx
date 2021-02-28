import styles from '../styles/componentes/Profile.module.css'
export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/arthurluiscouto.png " alt="Arthur Luis Couto" />
      <div>
        <strong>Arthur Luis</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1</p>
      </div>
    </div>
  )
}