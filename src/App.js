import {useState} from 'react';
import './App.css';

function App() {

  const [buttonColor,setButtonColor]=useState('red');
  const [buttonDisable,setButtonDisable]=useState(false);
  const newButtonName = buttonColor==='red'?'red':'blue';


  const handleClick=()=>{
    buttonColor==='red'?setButtonColor('blue'):setButtonColor('red');
  }



  return (
    <div className="App">
      <button onClick={handleClick} disabled={buttonDisable} style={{backgroundColor:buttonColor}}>Test {newButtonName}</button>
      <input 
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={buttonDisable}
        aria-checked={buttonDisable}
        onChange={(e)=>setButtonDisable(e.target.checked)}/>
    </div>
  );
}

export default App;
