/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (e) => {
    setInput(input.concat(e.target.value));
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Please Enter Values");
      setTimeout(() => {
        setInput("");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-[400px] py-10 border-[5px] rounded-md h-[600px] shadow-xl">
      {/* Input display */}
      <input
        type="text"
        className="w-[90%] h-12 text-right text-[30px] p-4 mb-4 mt-[-50px] bg-gray-100 border border-gray-300 rounded-lg"
        value={input}
        readOnly
      />
      {/* Calculator buttons */}
      <div className="w-[90%] grid grid-cols-4 gap-4 mt-[50px] text-[20px]">
        {/* Number buttons */}
        {[...Array(10).keys()].map((num) => (
          <button
            key={num}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg"
            onClick={handleButtonClick}
            value={num}
          >
            {num}
          </button>
        ))}
        {/* Operator buttons */}
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-lg text-[20px]"
            onClick={handleButtonClick}
            value={operator}
          >
            {operator}
          </button>
        ))}
        {/* Clear and Equals buttons */}
        <button
          className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-[20px]"
          onClick={clearInput}
        >
          Clear
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-[20px]"
          onClick={calculateResult}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
