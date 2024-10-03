import React, { useState } from 'react';

function App() {
  const [totalCost, setTotalCost] = useState('');
  const [numberOfIntervals, setNumberOfIntervals] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleCalculate = () => {
    if (totalCost && numberOfIntervals) {
      const calculatedEMI = (totalCost / numberOfIntervals).toFixed(2);
      setMonthlyPayment(calculatedEMI);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <label htmlFor="totalCost" className="block mb-2 text-sm font-bold text-gray-700">
          Total Loan Amount
        </label>
        <input
          type="number"
          id="totalCost"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="numberOfIntervals" className="block mb-2 text-sm font-bold text-gray-700">
          Number of Payments
        </label>
        <input
          type="number"
          id="numberOfIntervals"
          value={numberOfIntervals}
          onChange={(e) => setNumberOfIntervals(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
      </div>

      <button
        id="calculate"
        onClick={handleCalculate}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Calculate
      </button>

      <div id="output" className="mt-4 text-lg font-semibold">
        {monthlyPayment !== null && `Monthly Payment: $${monthlyPayment}`}
      </div>
    </div>
  );
}

export default App;
