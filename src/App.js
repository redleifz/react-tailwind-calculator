import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");

  const ops = ["/", "*", "-", "+", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };

  const calculate = () => {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex justify-center items-center w-[320px] h-[600px] bg-black rounded-[2rem]">
        <div className="flex flex-col w-[290px] h-[450px] bg-slate-800">
          <div className="w-full h-[100px] bg-slate-900 flex justify-end items-center text-white text-2xl overflow-hidden">
            {calc || "0"}
          </div>

          <div className="flex bg-slate-900 flex-row justify-between w-full h-[75px] p-1">
            <div
              className="flex justify-center items-center bg-gray-300 w-[65px] h-[65px] rounded-full"
              onClick={() => setCalc("")}
            >
              <span className="bg-gray-300 text-2xl">AC</span>
            </div>

            <div
              className="flex justify-center items-center bg-gray-300 w-[130px] h-[65px] rounded-full"
              onClick={deleteLast}
            >
              <span className="bg-gray-300 text-2xl">DEL</span>
            </div>

            <div
              className="flex justify-center items-center bg-orange-300 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("/")}
            >
              <span className="bg-orange-300 text-white text-2xl">/</span>
            </div>
          </div>

          <div className="flex bg-slate-900 flex-row justify-between w-full h-[75px] p-1">
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("7")}
            >
              <span className="bg-gray-600 text-white text-2xl">7</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("8")}
            >
              <span className="bg-gray-600 text-white  text-2xl">8</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("9")}
            >
              <span className="bg-gray-600 text-white text-2xl">9</span>
            </div>
            <div
              className="flex justify-center items-center bg-orange-300 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("*")}
            >
              <span className="bg-orange-300 text-white text-2xl">*</span>
            </div>
          </div>

          <div className="flex bg-slate-900 flex-row justify-between w-full h-[75px] p-1">
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("4")}
            >
              <span className="bg-gray-600 text-white text-2xl">4</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("5")}
            >
              <span className="bg-gray-600 text-white  text-2xl">5</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("6")}
            >
              <span className="bg-gray-600 text-white text-2xl">6</span>
            </div>
            <div
              className="flex justify-center items-center bg-orange-300 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("-")}
            >
              <span className="bg-orange-300 text-white text-3xl">-</span>
            </div>
          </div>

          <div className="flex bg-slate-900 flex-row justify-between w-full h-[75px] p-1">
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("1")}
            >
              <span className="bg-gray-600 text-white text-2xl">1</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("2")}
            >
              <span className="bg-gray-600 text-white  text-2xl">2</span>
            </div>
            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("3")}
            >
              <span className="bg-gray-600 text-white text-2xl">3</span>
            </div>
            <div
              className="flex justify-center items-center bg-orange-300 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc("+")}
            >
              <span className="bg-orange-300 text-white text-3xl">+</span>
            </div>
          </div>

          <div className="flex bg-slate-900 flex-row justify-between w-full h-[75px] p-1">
            <div
              className="flex  pl-7 items-center bg-gray-600 w-[130px] h-[65px] rounded-full"
              onClick={() => updateCalc("0")}
            >
              <span className="bg-gray-600 text-white text-2xl">0</span>
            </div>

            <div
              className="flex justify-center items-center bg-gray-600 w-[65px] h-[65px] rounded-full"
              onClick={() => updateCalc(".")}
            >
              <span className="bg-gray-600 text-white text-2xl">.</span>
            </div>
            <div
              className="flex justify-center items-center bg-orange-300 w-[65px] h-[65px] rounded-full"
              onClick={calculate}
            >
              <span className="bg-orange-300 text-white text-3xl">=</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
