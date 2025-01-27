import { useState } from "react";
import "../calculator.css"

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input-display">{input || "0"}</div>
        {result !== null && <div className="result-display">{result}</div>}
      </div>
      <div className="buttons">
        <button className="button grey" onClick={handleClear}>
          C
        </button>
        <button
          className="button grey"
          onClick={() => handleButtonClick("+/-")}
        >
          +/-
        </button>
        <button className="button grey" onClick={() => handleButtonClick("%")}>
          %
        </button>
        <button
          className="button orange"
          onClick={() => handleButtonClick("/")}
        >
          ÷
        </button>
        {[7, 8, 9].map((num) => (
          <button
            key={num}
            className="button dark"
            onClick={() => handleButtonClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="button orange"
          onClick={() => handleButtonClick("*")}
        >
          ×
        </button>
        {[4, 5, 6].map((num) => (
          <button
            key={num}
            className="button dark"
            onClick={() => handleButtonClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="button orange"
          onClick={() => handleButtonClick("-")}
        >
          −
        </button>
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            className="button dark"
            onClick={() => handleButtonClick(num.toString())}
          >
            {num}
          </button>
        ))}
        <button
          className="button orange"
          onClick={() => handleButtonClick("+")}
        >
          +
        </button>
        <button
          className="button dark zero"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button className="button dark" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="button orange" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
