// App.js
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h2 data-testid="count">Count: {count}</h2>
      <button onClick={handleIncrement} data-testid="increment-button">Increment</button>
      <button onClick={handleDecrement} data-testid="decrement-button">Decrement</button>
    </div>
  );
}
