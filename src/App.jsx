import Display from "./components/Display";
import styles from "./App.module.css";
import Buttons from "./components/Buttons";
import { useState } from "react";


function App() {


  const [calval,SetCallval]=useState("");


  const onbuttonClick=(btntext)=>{
    if(btntext==="c")
      {
        SetCallval("");
      }
      else if(btntext==="=")
        {
         let result=eval(calval);
         SetCallval(result);
        }
        else
        {
          const newClickButton=calval+btntext;
          SetCallval(newClickButton);
        }
  
  };

  return (
    <>
      <div className={styles.calculator}>
        <Display displayy={calval}></Display>
<Buttons onbuttonClick={onbuttonClick}></Buttons>
      </div>

    </>
  );
}

export default App;
