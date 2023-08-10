import { useState, useEffect } from 'react';
import Button from './Button';
import './calculator.css';
import calculate from '../logic/calculate';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

const Calculator = () => {
  const [calculatorObject, setCalculatorObject] = useState({
    total: null,
    next: '0',
    operation: null,
  });

  const onClickHandler = (buttonName) => {
    let result = calculate(calculatorObject, buttonName);
    if (result.next === null && result.total === null) result = { ...result, next: '0' };
    setCalculatorObject(result);
  };

  useEffect(() => {}, [calculatorObject]);

  const buttonItem = buttons.map((label) => (
    <Button click={onClickHandler} key={label} labelTag={label} />
  ));

  return (
    <div className="calculator">
      <div className="result">
        {calculatorObject.total}
        {' '}
        {calculatorObject.operation}
        {' '}
        {calculatorObject.next}
      </div>
      {buttonItem}
    </div>
  );
};

export default Calculator;
