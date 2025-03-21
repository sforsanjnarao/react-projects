import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-700">Choose a Color:</h1>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 rounded-md shadow-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-6 py-3 rounded-md shadow-md bg-red-500 text-white font-medium hover:bg-red-600 transition-all"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-6 py-3 rounded-md shadow-md bg-green-500 text-white font-medium hover:bg-green-600 transition-all"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-6 py-3 rounded-md shadow-md bg-gray-500 text-white font-medium hover:bg-gray-600 transition-all"
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
        </div>
        <p className="text-lg font-medium text-gray-600 mt-3">
          Current Color: <span className="font-bold text-gray-800">{color}</span>
        </p>
      </div>
    </div>
  );
}

export default App;