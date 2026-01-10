/**
 * INTERACTIVE ISLAND: Counter Component
 * 
 * This Preact component will be hydrated on the client
 * using Astro's client:* directives.
 * 
 * The HTML structure is pre-rendered at build time,
 * then JavaScript adds interactivity.
 */
import { useState } from 'preact/hooks';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h4>Click Counter</h4>
      <div className="counter-display">
        <span className="count-value">{count}</span>
        <span className="count-label">clicks</span>
      </div>
      <div className="counter-buttons">
        <button 
          onClick={() => setCount(count - 1)}
          className="counter-btn decrement"
        >
          −
        </button>
        <button 
          onClick={() => setCount(0)}
          className="counter-btn reset"
        >
          Reset
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="counter-btn increment"
        >
          +
        </button>
      </div>
      <p className="counter-note">
        🏝️ This is a Preact island - it has its own JavaScript!
      </p>
    </div>
  );
}

