import {useState} from 'react';
import './App.css';
import Test from './test';


export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g,' $1');
};



function App() {

  const [buttonColor,setButtonColor]=useState('red');
  const [buttonDisable,setButtonDisable]=useState(false);
  const newButtonName = buttonColor==='red'?'red':'blue';


  const handleClick=()=>{
    buttonColor==='red'?setButtonColor('blue'):setButtonColor('red');
  }



  return (
    <div className="App">
      <button onClick={handleClick} disabled={buttonDisable} style={{backgroundColor:buttonDisable?'gray':buttonColor}}>Test {newButtonName}</button>
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
