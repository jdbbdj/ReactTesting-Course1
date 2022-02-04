import {useState} from 'react';
import './App.css';
import Test from './test';


export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g,' $1');
};



function App() {

  const [buttonColor,setButtonColor]=useState('MediumVioletRed');
  const [buttonDisable,setButtonDisable]=useState(false);
  const newButtonName = buttonColor==='MediumVioletRed'?'MediumVioletRed':'MidnightBlue';


  const handleClick=()=>{
    buttonColor==='MediumVioletRed'?setButtonColor('MidnightBlue'):setButtonColor('MediumVioletRed');
  }



  return (
    <div className="App">
      <button onClick={handleClick} disabled={buttonDisable} style={{backgroundColor:buttonDisable?'gray':buttonColor}}>Test {replaceCamelWithSpaces(newButtonName)}</button>
      <input 
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={buttonDisable}
        aria-checked={buttonDisable}
        onChange={(e)=>setButtonDisable(e.target.checked)}/>
        <label htmlFor="disable-button-checkbox">
          Disable Button
        </label>
        <Test/>
    </div>
  );
}

export default App;
