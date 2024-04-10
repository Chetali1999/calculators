import './App-module.css';
import ButtonContainer from './Components/Buttons-container';
import Display from './Components/Display';
import { useState } from 'react';

function App() {

  let [calVAl, setCalVal] = useState('');
  const buttonClick = (buttoText) => {
    if (buttoText === 'C') {
      setCalVal('');
    }
    else if (buttoText === '=') {
      const result = eval(calVAl);
      setCalVal(result);
    }
    else {
      const newDisplayValue = buttoText + calVAl;
      setCalVal(newDisplayValue);

    }
  }

  return (
    <div className='calculator'>
      <Display displayVal={calVAl}></Display>
      <ButtonContainer onButtonClick={buttonClick} />
    </div>
  );
}

export default App;
