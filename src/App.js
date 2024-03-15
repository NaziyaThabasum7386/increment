import React, { useState } from "react";

export default function App() {
  const [increase, setIncrease] = useState(0);

  // Cypress test cases inclusion
  if (process.env.NODE_ENV === 'test') {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>Count: {increase}</h2>
        <button data-testid="increment-button" onClick={(e) => setIncrease(increase + 1)}>Increment</button>
        <button data-testid="decrement-button" onClick={(e) => setIncrease(increase - 1)}>Decrement</button>
      </div>
    );
  }

  // Normal rendering without test cases
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {increase}</h2>
      <button onClick={(e) => setIncrease(increase + 1)}>Increment</button>
      <button onClick={(e) => setIncrease(increase - 1)}>Decrement</button>
    </div>
  );
}
