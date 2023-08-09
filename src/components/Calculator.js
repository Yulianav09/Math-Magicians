import Button from './Button';
import './calculator.css';

const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const buttonItem = buttons.map((label) => <Button key={label} labelTag={label} />);
const Calculator = () => (
  <div className="calculator">
    <div className="result">0</div>
    {buttonItem}
  </div>
);

export default Calculator;
