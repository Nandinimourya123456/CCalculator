import styles from "./Display.module.css";
const Display = ({displayy}) => {
  return (
    <>
      
      <input type="text" className={styles.display}  value={displayy} readOnly/>

    </>
  )
}

export default Display
