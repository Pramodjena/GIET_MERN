import "./App.css";
import Calculator from "./Calculator";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[400px] mb-6 text-center border-[2px] rounded-lg">
        <h1 className="text-white text-[30px] font-extrabold">PRAMOD CALCULATOR</h1>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
