// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
  };
  const validateInputs = () => {
    if (!num1.trim()) {
      setError('Number 1 cannot be empty.');
      return false;
    }
  
    if (!num2.trim()) {
      setError('Number 2 cannot be empty.');
      return false;
    }
  
    if (isNaN(Number(num1)) || isNaN(Number(num2))) {
      setError('Invalid input. Please enter valid numbers.');
      return false;
    }
  
    setError('');
    return true;
  };
  

const handleOperation = (operation) => {
    // Clear previous result and error
    setResult('');
    setError('');
  
    if (validateInputs()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
  
      switch (operation) {
        case 'add':
          setResult(number1 + number2);
          break;
        case 'subtract':
          setResult(number1 - number2);
          break;
        case 'multiply':
          setResult(number1 * number2);
          break;
        case 'divide':
          setResult(number1 / number2);
          break;
        default:
          setResult('');
      }
    }
  };
  

  return (
    <div className="calculator-box">
    <div className="calculator-container">
    <h2>React Calculator</h2>
      <div className='input-items' >
      
        {/* <label>Number 1:</label> */}

        <input type="text" value={num1} onChange={(e) => handleInputChange(e, setNum1)} placeholder='Num1'  />
        <input type="text" value={num2} onChange={(e) => handleInputChange(e, setNum2)} placeholder='Num2' />
        </div>


      <div>
        <button onClick={() => handleOperation('add')}> + </button>
        <button onClick={() => handleOperation('subtract')}> - </button>
        <button onClick={() => handleOperation('multiply')}> * </button>
        <button onClick={() => handleOperation('divide')}> / </button>
      </div>
      
      {error && <div className="error"> <h2 className='error-output'>Error!</h2>
      {error}</div>}
      {result && <div className="success">
        <h2 className='success-output'>Success!</h2>
        Result : {result}</div>}

     
      </div>
  
    </div>
  );
};

export default Calculator;
