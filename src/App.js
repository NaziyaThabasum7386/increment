import { useState } from "react";

export default function App() {
  const [increase, setIncrease] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {increase}</h2>
      <button onClick={(e) => setIncrease(increase + 1)}>Increament </button>
      <button onClick={(e) => setIncrease(increase - 1)}>Decrement</button>
    </div>
  );
}
