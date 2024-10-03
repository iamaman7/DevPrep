import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				data-testid="incrementBtn"
				onClick={() => {
					const newCount = count + 1
					setCount(newCount);

					console.log(`newCount: ${newCount}`);
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;
