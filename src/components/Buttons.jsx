import styles from "./Buttons.module.css";
const Buttons = ({ onbuttonClick}) => {
  const ButtonsNames = ['1', '2', '3', 'c', '5', '+', '7', '(', '*', '^', ')', '-', '%', '/', '9', '='];
  return (
    <>
      <div className={styles.btncontaier}>
        {ButtonsNames.map(ButtonsName => <button className={styles.butttndisplay}  key={ButtonsName} onClick={()=>onbuttonClick(ButtonsName)}>{ButtonsName}</button>)}
        {/*   onClick={()=>onbuttonClick(ButtonsName)}  ButtonName se jo click krege uska Name a jayaga innput m */} 



      </div>
    </>
  )
}

export default Buttons
