import React, { useState } from 'react';

// You can make use of this object to construct the select elements and the conversion
const conversionRates = {
  centimeters: 1,
  inches: 2.54,
  feet: 30.48,
  meters: 100,
  kilometers: 100000,
  miles: 160934.4
};

function App() {
  const [fromUnit, setFromUnit] = useState('centimeters');
  const [toUnit, setToUnit] = useState('inches');
  const [fromValue, setFromValue] = useState(0);
  const [outputValue, setOutputValue] = useState('');

  const convertDistance = () => {
    const fromRate = conversionRates[fromUnit];
    const toRate = conversionRates[toUnit];
    const convertedValue = (fromValue * fromRate) / toRate;
    setOutputValue(convertedValue.toFixed(3));
  };

  return (
    <div className="p-5">
      <div className="mb-3">
        <label className="block mb-2 text-sm font-bold text-gray-700">From:</label>
        <select id="fromUnit" className="border border-gray-300 p-2 rounded" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {Object.keys(conversionRates).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-bold text-gray-700">To:</label>
        <select id="toUnit" className="border border-gray-300 p-2 rounded" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(conversionRates).map(unit => (
            <option key={unit} value={unit}>{unit}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-2 text-sm font-bold text-gray-700">Value:</label>
        <input type="number" id="fromValue" className="border border-gray-300 p-2 rounded w-full" value={fromValue} onChange={(e) => setFromValue(e.target.value)} />
      </div>
      <button id="convert" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={convertDistance}>Convert</button>
      <div id="outputValue" className="mt-3 p-2 bg-gray-200 rounded">
        {outputValue}
      </div>
    </div>
  );
}

export default App;
