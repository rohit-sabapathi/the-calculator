import Image from './calculator.png';
import './App.css';
import React, {useState,useRef} from 'react';

function App() {

  const inputRef = useRef(null);
  const [result, setResult] = useState(null);


  const addition = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const subtraction = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiplication = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const division = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
  };


  return (
    <div className='the-calc'>
      <header>
        <h1>The Calculator</h1>
        <img src={Image} className='App-logo' alt='calculator' height={150} width={150}/>
      </header>
      <main>
      <form>
          <h2>Result:</h2>
          <h3>{result}</h3>
        <input pattern='[0-9]' ref={inputRef} type='number' placeholder='Type a number'
        />
        <br/><br/>
        <div className="btn-con">
        <button type='button' onClick={addition}  id='add'>Add</button>
        <button type='button' onClick={subtraction}  id='subtract'>Subtract</button>
        <button type='button' onClick={multiplication}  id='multiply'>Multiply</button>
        <button type='button' onClick={division}  id='divide'>division</button>
      </div><br/>
      <div className="reset-btn">
        <button type="button" onClick={resetInput}>Reset Input</button>
        <button type="button" onClick={resetResult}>Reset Result</button>
      </div>
      </form></main>
    </div>
  );
}

export default App;