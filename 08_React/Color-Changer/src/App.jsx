import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#212121");
  const changeColor = (color) => {
    setColor(color);
    document.body.style.backgroundColor = color;
  };

  const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      const value = hex[Math.round(Math.random() * 15)];
      randomColor += value;
      setColor(randomColor);
      document.body.style.backgroundColor = randomColor;
    }
  };

  return (
    <div className="container max-w-full h-screen relative">
      <h1>Color Code:{color}</h1>
      <div className="button_container flex justify-between max-w-lg border bg-slate-400  text-white px-3 py-2 m-auto rounded-md fixed bottom-8 left-0 right-0 w-full">
        <button
          onClick={() => changeColor("#FF0000")}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Red
        </button>
        <button
          onClick={() => changeColor("#FFFF00")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Yellow
        </button>
        <button
          onClick={() => changeColor("#0000FF")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Blue
        </button>
        <button
          onClick={randomColor}
          className="bg-green-950  hover:bg-green-950 text-white font-bold py-2 px-4 rounded-lg"
        >
          Random
        </button>
      </div>
    </div>
  );
}

export default App;
